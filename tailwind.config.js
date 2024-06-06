/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#eaeaea",
        },
        black: "#000",
        darkslategray: {
          "100": "#434343",
          "200": "#393939",
          "300": "#343434",
          "400": "#2e2e2e",
        },
        orange: {
          "100": "#f7a70d",
          "200": "#f7a600",
        },
        chocolate: {
          "100": "#c47500",
          "200": "#c47300",
        },
        khaki: "#ffd683",
        gray: "rgba(0, 0, 0, 0.05)",
        papayawhip: "#fff1d2",
        darkslateblue: {
          "100": "#595994",
          "200": "#272761",
        },
        lightgray: {
          "100": "#d5d5d5",
          "200": "#d1d1d1",
        },
        dimgray: {
          "100": "#686868",
          "200": "#555",
        },
        darkgray: "#b4b4b4",
      },
      spacing: {},
      fontFamily: {
        "red-hat-display": "'Red Hat Display'",
        "red-hat-text": "'Red Hat Text'",
        "libre-baskerville": "'Libre Baskerville'",
      },
      borderRadius: {
        "113xl-7": "132.7px",
        "9xs": "4px",
        "31xl": "50px",
        "8xs": "5px",
        "8xs-7": "4.7px",
        "9xs-5": "3.5px",
        "9xs-1": "3.1px",
      },
    },
    fontSize: {
      "xl-9": "20.9px",
      mid: "17px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "8xl-3": "27.3px",
      "3xl": "22px",
      "mid-8": "17.8px",
      "5xl-3": "24.3px",
      "13xl": "32px",
      "7xl": "26px",
      mini: "15px",
      "10xl": "29px",
      "40xl": "59px",
      "28xl": "47px",
      "16xl": "35px",
      "9xl": "28px",
      "29xl": "48px",
      "19xl": "38px",
      "17xl": "36px",
      sm: "14px",
      smi: "13px",
      "lg-6": "18.6px",
      "7xl-1": "26.1px",
      "2xl": "21px",
      "36xl": "55px",
      "25xl": "44px",
      "14xl": "33px",
      "xl-4": "20.4px",
      "base-2": "16.2px",
      "mini-2": "14.2px",
      "21xl": "40px",
      "smi-2": "12.2px",
      "2xl-9": "21.9px",
      lg: "18px",
      "4xs-7": "8.7px",
      "mini-4": "14.4px",
      "3xl-4": "22.4px",
      "smi-4": "12.4px",
      "lg-3": "18.3px",
      inherit: "inherit",
    },
    screens: {
      mq1725: {
        raw: "screen and (max-width: 1725px)",
      },
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1600: {
        raw: "screen and (max-width: 1600px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
