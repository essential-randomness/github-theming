import "./App.css";

function App() {
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
    </main>
  );
}

export default App;
