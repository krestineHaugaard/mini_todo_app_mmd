export default function Form({ setItems }) {
  function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      task: formData.get("item"),
      completed: false,
      id: Math.random(),
    };
    setItems((state) => state.concat(newItem));
  }

  return (
    <form onSubmit={submit}>
      <input type="text" name="item" />
      <button>Gem</button>
    </form>
  );
}
