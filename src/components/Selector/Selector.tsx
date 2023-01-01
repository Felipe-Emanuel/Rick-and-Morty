import "./styles.css";
import { useState, useEffect } from "react";
import { Options } from "../options/Options";
import { Card } from "../Card/Card";
import { Header } from "../Header/Header";

import api from "../../services/api";
import { Text } from "../Text/Text";
import { PortalWeaponAnimation } from "../../animations/PortalWeapon/PortalWeaponAnimation";
import { LoadingAnimation } from "../../animations/Loading/LoadingAnimation";
import { BackAnimation } from "../../animations/Back/BackAnimation";
import { MortyAnimation } from "../../animations/Morty/MortyAnimation";
import { Container } from "../Container/Container";
import { GlobalButton } from "../GlobalButton/GlobalButton";

export function Selector() {
  const [value, setValues] = useState("");
  const [isMorty, setIsMorty] = useState("More");
  const [isSelected, setIsSelected] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const options = ["character"];

  useEffect(() => {
    isMorty.includes("Evil Morty?") ? setIsVisible(true) : setIsVisible(false);
  }, [isMorty]);

  function handleSelect(e: any) {
    setValues(e.target.textContent);
    setIsSelected((isSelected) => !isSelected);
  }

  useEffect(() => {
    setLoading(true);
    api.get(`${value}`).then(({ data }) => {
      setData(data.results);
      setLoading(false);
    });
  }, [value]);

  function handleClick() {
    setIsSelected((isSelected) => !isSelected);
  }

  return (
    <Container className={loading ? "selector selector_loading" : "selector_no-loading"}>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <Header
            className="selector_header"
            as="h1"
            text={disabled ? "Cya" : "Take your card!"}
          />
          {isSelected ? (
            <div className="selector_overflow-hidden">
              <div className="selector__options">
                <PortalWeaponAnimation />
                <Header
                  className="selector__subtitle"
                  as="h2"
                  text="Choose what you want to raffle..."
                />
                {options.map((option) => (
                  <Options
                    key={option}
                    onClick={(e: any) => {
                      handleSelect(e);
                    }}
                    text={option}
                  />
                ))}
                <div className="selector_overflow-hidden">
                  <Text className="selector__text_isMorty">
                    <span
                      onMouseLeave={() => setIsMorty("More")}
                      onMouseEnter={() => setIsMorty("Evil Morty?")}
                    >
                      {isMorty}
                    </span>{" "}
                    is comming...
                  </Text>
                  {isVisible && <MortyAnimation />}
                </div>
              </div>
            </div>
          ) : (
            <div className="selector__card">
              {data != undefined &&
                data?.map((data) => (
                  <Card
                    onClick={() => setDisabled(true)}
                    disabled={disabled}
                    key={data.id}
                    image={data.image}
                    alt={data.name}
                    name={data.name}
                    status={data.status}
                    location={data.location.name}
                    species={data.species}
                  />
                ))}
              <GlobalButton
                text={disabled ? "Back tomorrow" : <BackAnimation />}
                disabled={disabled}
                onClick={() => handleClick()}
              />
            </div>
          )}
        </>
      )}
    </Container>
  );
}
