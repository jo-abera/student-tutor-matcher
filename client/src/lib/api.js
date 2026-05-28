const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const fetchTutors = async (params) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== '' && value !== undefined && value !== null) {
      query.append(key, value);
    }
  });

  const response = await fetch(`${API_URL}/tutors?${query.toString()}`);
  if (!response.ok) {
    throw new Error('Could not fetch tutors');
  }
  return response.json();
};

export const fetchTutor = async (id) => {
  const response = await fetch(`${API_URL}/tutors/${id}`);
  if (!response.ok) {
    throw new Error('Could not fetch tutor');
  }
  return response.json();
};

export const fetchBookings = async () => {
  const response = await fetch(`${API_URL}/bookings`);
  if (!response.ok) {
    throw new Error('Could not fetch bookings');
  }
  return response.json();
};

export const createBooking = async (payload) => {
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Could not create booking');
  }

  return data;
};
