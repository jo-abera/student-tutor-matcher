///TEST CODE
/*
export const getTutors = async () => {
  return [{ name: "Amina" }];
};
*/

import { seedTutors } from "../data/seedTutors.js";
import { Tutor } from "../models/Tutor.js";

export const isDbEnabled = () => Boolean(process.env.MONGO_URI);
//export const isDbEnabled = () => false

export const ensureSeedTutors = async () => {
  if (!isDbEnabled()) {
    return;
  }

  const count = await Tutor.countDocuments();
  if (count === 0) {
    await Tutor.insertMany(seedTutors);
    //console.log("Seeded tutors to the database");
  }
};

export const getTutors = async ({
  search = "",
  subject = "",
  availability = "",
  minRate = 0,
  maxRate = 500
}) => {
  if (isDbEnabled()) {
    const filters = {
      hourlyRate: { $gte: Number(minRate), $lte: Number(maxRate) }
    };

    if (search) {
      filters.$or = [
        { name: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
        { bio: { $regex: search, $options: "i" } },
        { subjects: { $elemMatch: { $regex: search, $options: "i" } } }
      ];
    }
    if (subject) {
      filters.subjects = subject;
    }
    if (availability) {
      filters.availability = availability;
    }
    return Tutor.find(filters).sort({ featured: -1, rating: -1 });
  }

  return seedTutors
    .filter((tutor) => {
      const withinRate = tutor.hourlyRate >= Number(minRate) && tutor.hourlyRate <= Number(maxRate);
      const matchesSearch =
        !search ||
        [tutor.name, tutor.title, tutor.bio, ...tutor.subjects].some((value) =>
          value.toLowerCase().includes(search.toLowerCase())
        );
      const matchesSubject = !subject || tutor.subjects.includes(subject);
      const matchesAvailability = !availability || tutor.availability.includes(availability);
      return withinRate && matchesSearch && matchesSubject && matchesAvailability;
    })
    .sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating);
  console.log("Using DB:", isDbEnabled());
};

export const getTutorsById = async (id) => {
  if (isDbEnabled()) {
    return Tutor.findById(id);
  }
  return seedTutors.find((tutor) => tutor.id === id);
};
