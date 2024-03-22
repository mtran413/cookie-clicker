import "./styles.css";
export default function Button({ action, name }) {
  return (
    <button id="cookiebutton" onClick={action}>
      <img class="cookieimg" src={name} alt="cookie" />
    </button>
  );
}