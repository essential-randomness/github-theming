import "./App.css";

import React from "react";

const getGistIdFromUrl = (url: string) => {
  // Url example: https://gist.github.com/essential-randomness/26408ede94ccb51c2074364cab52c3fd
  return "26408ede94ccb51c2074364cab52c3fd";
};

const fetchGistContent = async (gistId: string) => {
  const data = await (
    await fetch(`https://api.github.com/gists/${gistId}`)
  ).json();

  return data.files["initial-test.css"].content;
};

const loadGist = async (url: string) => {
  const gistId = getGistIdFromUrl(url);

  return await fetchGistContent(gistId);
};

function App() {
  const [loading, setLoading] = React.useState(false);
  const styleElementRef = React.useRef<HTMLStyleElement | null>(null);

  return (
    <main>
      <section>
        <img
          alt="bobatan"
          src="https://essentialrandomness.com/content/images/size/w1600/2021/06/fellow_fans.png"
          width={200}
        />
        <h1>Welcome to a small experiment</h1>
        <p>
          The goal of this experiment? Testing importing CSS file directly from
          GitHub!
        </p>
        <details>
          <summary>Tell me more</summary>
          <dl>
            <dt>The question</dt>
            <dd>
              Can the theme of an already-deployed website be customized by
              importing a CSS file from a GitHub gist or repo?
            </dd>
            <dt>The motivation</dt>
            <dd>
              Modern indie software must return to users the power of
              customizability that the corporate web has taken away.
            </dd>
            <dt>Why GitHub</dt>
            <dd>
              This work is part of a larger exploration in using git-based
              system as a decentralized repository of data.
            </dd>
          </dl>
        </details>
      </section>
      <section>
        <h2>Theme me up</h2>
        <button
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            const gistContent = await loadGist(
              "https://gist.github.com/essential-randomness/26408ede94ccb51c2074364cab52c3fd"
            );
            if (styleElementRef.current) {
              document.head.removeChild(styleElementRef);
            }
            const styleEl = document.createElement("style");
            styleEl.textContent = gistContent;
            document.head.appendChild(styleEl);
            styleElementRef.current = styleEl;
            setLoading(false);
          }}
        >
          Test
        </button>
      </section>
    </main>
  );
}

export default App;
