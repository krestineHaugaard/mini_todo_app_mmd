export default function ListItem(props) {
  return (
    <li>
      {props.task} <button onClick={() => props.remove(props.id)}>Slet</button>{" "}
      <button onClick={() => props.toggle(props.id)}>Gennemført</button>
    </li>
  );
}
