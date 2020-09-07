import {
  defaultFont,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px",
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px",
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: grayColor[1],
  },
};

export default typographyStyle;
