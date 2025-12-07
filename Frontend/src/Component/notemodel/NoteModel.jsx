import style from "./NoteModel.module.css";

export default function NoteModel({ title, content, onClose }) {
  return (
    <div className={style.modal_overlay}>
      <div className={style.modal_container}>
        <button className={style.close_button} onClick={onClose}>
          &times;
        </button>

        <h2>Edit Note</h2>

        <label htmlFor="modal_title">Title</label>
        <input
          type="text"
          id="modal_title"
          defaultValue={title}
          className={style.modal_input}
        />

        <label htmlFor="modal_content">Content</label>
        <textarea
          id="modal_content"
          defaultValue={content}
          className={style.modal_textarea}
        />

        <div className={style.modal_buttons}>
          <button className={style.save_button}>Save</button>
          <button className={style.delete_button}>Delete</button>
        </div>
      </div>
    </div>
  );
}
