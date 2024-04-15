import ListItem from "./ListItem";

export default function List({ items, remove, toggle }) {
  return (
    <>
      <h2>Her er dine to do`s</h2>
      <ul>
        {items.map((item) => (
          <ListItem remove={remove} toggle={toggle} {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
