import { Html, Head, Main, NextScript } from "next/document";
import constants from "../constants";

const Document = () => {
  const ogImage = `https://api.metaimg.net/v1/render?design=simple&align=left&image=https%3A%2F%2Fres.cloudinary.com%2Fdnuyyxyti%2Fimage%2Fupload%2Fv1662293682%2Fmetaimg-playground%2Flygdhae2afhb6qv4zxll.jpg&title=EmelleTV&description=The+Twitch+show+to+talk+about+OCaml%2C+ReScript+%26+Reason+ecosystems+with+cool+members+of+the+community%2C+and+learn+from+them.&textColor=454444&backgroundColor=FFFFFF`;

  const description =
    "The show to talk about OCaml, ReScript and Reason ecosystems";

  const title = "EmelleTV";

  return (
    <Html>
      <Head>
        <meta name="description" content={description} />
        <meta property="og:url" content={constants.httpUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="{title}" />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={constants.url} />
        <meta property="twitter:url" content={constants.httpUrl} />
        <meta name="twitter:title" content="{title}" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
