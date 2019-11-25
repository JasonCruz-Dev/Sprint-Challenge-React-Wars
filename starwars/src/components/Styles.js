import style from "styled-components";

export const Entry = style.div`
  background:darkorange;
  height: 250px;
  width: 100%;
  margin-top: 8%;
  margin-left: 10%;
  text-align: justify;
  transition:width 3s linear
  &:hover{
    width: 120%
  }`;

export const Div = style.div`
  border-bottom: 3px solid white;
  width: 80%;
  margin: 2% auto`;

export const margin = {
  margin: "80px",
  height: "220px"
};

export const padding = {
  width: "100%",
  padding: ".1%",
  marginRight: "12%"
};

export const font = {
  fontSize: "22px",
  padding: "3%",
  color: "white"
};

export const weight = {
  fontWeight: "700"
};
