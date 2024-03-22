import { useState } from "react"; /* App.js */
import Button from "./Button";
import "./styles.css";
import BuyButton from "./BuyButton";

export default function App() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState(0);
  const [cookieimg, setCookieimg] = useState(
    "https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png"
  );

  function addone() {
    setCount((previousCount) => previousCount + 1);
  }

  function whitechoc() {
    if (count >= 50) {
      setCount((previousCount) => previousCount - 50);
      setLevel((previousCount) => previousCount + 1);
      var messages = document.getElementById("messages");
      messages.innerText =
        "You have bought White Chocolate Chips! Your bakery has leveled up by 1.";
      setCookieimg(
        "https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-White-Chocolate-Macadamia-21-1600x1600-1-1024x1024.png"
      );
    } else {
      var messages = document.getElementById("messages");
      messages.innerText = "You don't have enough cookies!";
    }
  }

  function rainbow() {
    if (count >= 100) {
      setCount((previousCount) => previousCount - 100);
      setLevel((previousCount) => previousCount + 2);
      var messages = document.getElementById("messages");
      messages.innerText =
        "You have bought Rainbow Sprinkles! Your bakery has leveled up by 2.";
      setCookieimg(
        "https://okiedoughcookies.com/cdn/shop/files/IMG_0845.png?v=1690814266"
      );
    } else {
      var messages = document.getElementById("messages");
      messages.innerText = "You don't have enough cookies!";
    }
  }

  function chocodough() {
    if (count >= 500) {
      setCount((previousCount) => previousCount - 500);
      setLevel((previousCount) => previousCount + 10);
      var messages = document.getElementById("messages");
      messages.innerText =
        "You have bought Chocolate Cookie Dough! Your bakery has leveled up by 10.";
      setCookieimg(
        "https://www.skeeternutfree.com/wp-content/uploads/2015/04/ART_Cookie_1_DC.png"
      );
    } else {
      var messages = document.getElementById("messages");
      messages.innerText = "You don't have enough cookies!";
    }
  }

  function extremeoven() {
    if (count >= 1000) {
      setCount((previousCount) => previousCount - 1000);
      setLevel((previousCount) => previousCount + 100);
      var messages = document.getElementById("messages");
      messages.innerText =
        "You have bought the Extreme Oven! Your bakery has leveled up by 100. Wow!";
      setCookieimg("https://pngimg.com/d/cookie_PNG13691.png");
      alert(
        "You've been playing this game for far too long. Maybe go outside..."
      );
    } else {
      var messages = document.getElementById("messages");
      messages.innerText = "You don't have enough cookies!";
    }
  }

  return (
    <div className="App">
      <h1 contenteditable="true">Click Here to Name Your Bakery!</h1>
      <p>
        Click the cookie below to collect cookies and buy items to level up your
        bakery!
      </p>
      <Button action={addone} name={cookieimg} />{" "}
      {/* <Button action={reset} name="Reset" /> */}
      <br />
      <h2 id="messages"> </h2>
      <div id="stats">
        <h2> Bakery Stats: </h2>
        <h3>{count} Cookies</h3>
        <h3> Bakery Level: {level} </h3>
      </div>
      <div id="store">
        <h2> $ Bakery Store $</h2>
        <BuyButton
          action={whitechoc}
          name="Buy White Chocolate Chips - 50 cookies"
          img="https://savorygourmet.com/cdn/shop/products/DGFChocolateDropsWhite23_7500ct6kg13710product.png?v=1670289820"
        />
        <BuyButton
          action={rainbow}
          name="Buy Rainbow Sprinkles - 100 cookies"
          img="https://paulaur.com/wp-content/uploads/2019/05/NB_100316_20_RAINBOW8SPRINKL_2.png"
        />
        <BuyButton
          action={chocodough}
          name="Buy Chocolate Cookie Dough - 500 cookies"
          img="https://i.pinimg.com/originals/b9/db/26/b9db261ccc3e808b845edfd7c00dbf58.png"
        />
        <BuyButton
          action={extremeoven}
          name="Buy Extreme Oven - 1000 cookies"
          img="https://www.fulgor-milano.com/sites/default/files/styles/product_grid_320x320_/public/2022-12/F6PDF364GS1%20-%20Product%20Grid.png?itok=YAPNiVYv"
        />
      </div>
    </div>
  );
}