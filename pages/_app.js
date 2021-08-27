import Head from "next/head";
import ThemeProvider from "providers/ThemeProvider";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faThList,
  faSortNumericDown,
  faSortNumericUp,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(
  faSun,
  faMoon,
  faThList,
  faThLarge,
  faSortNumericDown,
  faSortNumericUp
);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/github.css";
import "react-toggle/style.css";
import "styles/index.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>Izu Blog</title>
        <meta property="og:title" content="Izu Blog" key="title" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
