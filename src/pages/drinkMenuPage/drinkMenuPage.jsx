import React, { useEffect, useState } from "react";
import "./drinkMenuPage.scss";
import { scrollToSection } from "../../utils/scrollToSection";
import video from "../../assets/video/ice-water.mp4";
import ScrollToHeader from "../../components/scrollToHeader";
import { drinkMenu } from "./mock";

const DrinkMenuPage = () => {
  const [myRef, setMyRef] = useState();

  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className={`drinkMenuPage`}>
      <ScrollToHeader links={drinkMenu} setMyRef={setMyRef} />
      <video
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload={"metadata"}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        {drinkMenu.map((item) => {
          return (
            <div
              key={item.id}
              id={item.title.toUpperCase()}
              className="content"
            >
              <h2>{item.title.toUpperCase()}</h2>
              <ul className="foodList">
                {item.type.map((food) => {
                  return (
                    <li key={food.id}>
                      <p className="foodName">{food.name.toUpperCase()}</p>

                      {!!food.isRecipe ? (
                        food.description.map((item, index) => {
                          return (
                            <p
                              className={`foodDescription ${
                                food.isMany ? "many" : ""
                              }`}
                              key={index}
                            >
                              {item.name}
                            </p>
                          );
                        })
                      ) : (
                        <p className="foodDescription">{food.description}</p>
                      )}
                      <p className="foodPrice">{food.price}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DrinkMenuPage;
