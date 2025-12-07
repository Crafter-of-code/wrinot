import style from "./Home.module.css";

export default function Home() {
  // Example notes array with title and content
  const notes = [
    { title: "Grocery List", content: "Buy milk, eggs, and bread." },
    { title: "React Project", content: "Finish note-taking app UI design." },
    { title: "Reading", content: "Read a chapter of 'Atomic Habits'." },
    { title: "Work Task", content: "Prepare slides for Monday meeting." },
    { title: "Weekend Plan", content: "Go hiking and visit friends." },
  ];

  return (
    <main className={style.main_container}>
      <h1>Write Your Notes</h1>

      <section className={style.note_input_section}>
        <input
          type="text"
          placeholder="Note Title"
          className={style.note_title_input}
        />
        <textarea
          placeholder="Type your note here..."
          className={style.note_input}
        />
        <button className={style.add_button}>Add Note</button>
      </section>

      <section className={style.notes_container}>
        {notes.map((note, index) => (
          <div className={style.note_card} key={index}>
            <h3 className={style.note_title}>{note.title}</h3>
            <p className={style.note_content}>{note.content}</p>
            <button className={style.delete_button}>Delete</button>
          </div>
        ))}
      </section>
    </main>
  );
}
