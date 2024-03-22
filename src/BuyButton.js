export default function BuyButton({ action, name, img }) {
    return (
      <button id="buybutton" onClick={action}>
        <img class="buyimage" src={img} alt="buy" />
        {name}
      </button>
    );
  }