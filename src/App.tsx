import { useState } from "react";

import { Button } from "./components/Button";
import { RandomButton } from "./components/RandomButton";
import loveSignImage from "../public/love-sign.jpg";

import "./App.css";

const titles = {
  yaguinho: "o Yaguinho é pirocudo",
  bonitinha: "você sabe que se é bonitona né",
};

function App() {
  const [showImage, setShowImage] = useState(false);

  const parameterLabel =
    window.location.search && window.location.search.split("=")[1].toString();

  const title =
    titles[parameterLabel as keyof typeof titles] ??
    "sei lá, faltou criatividade";

  return (
    <>
      <div>
        <h2>OIER.... {title}??</h2>

        <div className="button-container">
          <Button setShowImageAction={setShowImage}>SIM 😍</Button>

          <RandomButton>nao 😥</RandomButton>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "2.4rem",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "550px",
              height: "380px",
              overflow: "hidden",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
              transform: showImage ? "translateY(0)" : "translateY(100%)",
              opacity: showImage ? 1 : 0,
              transition: "transform 1s ease-out, opacity 1s ease-out",
            }}
          >
            <img
              alt="Love Sign Image"
              src={loveSignImage}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.8s ease, filter 0.8s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0, 0, 0, 0.3)",
                color: "white",
                fontSize: "1.4rem",
                fontWeight: 500,
                opacity: 0,
                transition: "opacity 0.5s ease",
              }}
              className="overlay"
            >
              Hello There 👋
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
