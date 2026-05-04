
export default function TutorCard(){
    return (
<article className="group overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-soft transition hover:-translate-y-1"> 
<div className="relative h-56 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHV0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Tutor profile" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
    <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white">Featured</span>
</div>

 
</article>



    )
}