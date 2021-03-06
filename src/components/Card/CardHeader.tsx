import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { hexToRgb } from "utils/colors";

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: 3,
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: theme.palette.common.white,
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0",
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px",
      },
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px",
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px",
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right",
    },
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important",
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right",
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important",
    },
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader": {
      background: "transparent",
      boxShadow: "none",
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px",
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px",
    },
  },
  warningCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.warning.main +
        ", " +
        theme.palette.warning.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.warning.light) +
        ",.4)",
    },
  },
  successCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.success.main +
        ", " +
        theme.palette.success.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.success.main) +
        ",.4)",
    },
  },
  dangerCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.error.main +
        ", " +
        theme.palette.error.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.error.main) +
        ",.4)",
    },
  },
  infoCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.info.main +
        ", " +
        theme.palette.info.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.info.main) +
        ",.4)",
    },
  },
  primaryCardHeader: {
    color: theme.palette.common.white,
    "&:not($cardHeaderIcon)": {
      background:
        "linear-gradient(60deg, " +
        theme.palette.primary.main +
        ", " +
        theme.palette.primary.light +
        ")",
      boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(theme.palette.common.black) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(theme.palette.primary.main) +
        ",.4)",
    },
  },
}));

const CardHeader: React.FC<{
  className: string;
  children: React.ReactNode;
  color: "warning" | "success" | "danger" | "info" | "primary";
  plain?: boolean;
  stats?: boolean;
  icon?: boolean;
}> = ({ className, children, color, plain, stats, icon }) => {
  const classes = useStyles();

  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined,
  });

  return <div className={cardHeaderClasses}>{children}</div>;
};

export default CardHeader;
