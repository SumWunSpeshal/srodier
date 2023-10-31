import { useEffect, useState } from 'react';
import ShitDoesntWork from 'react-syntax-highlighter/dist/cjs/prism-light';
import { hlStyle } from '../utils/hl-style';
import { jsx } from '../utils/jsx';
import { sleep } from '../utils/sleep';

const intros = [
  '',
  'I',
  'In',
  'Int',
  'Intr',
  'Intro',
  '<Intro></Intro>',
  '<Intro ></Intro>',
  '<Intro h></Intro>',
  '<Intro he></Intro>',
  '<Intro hea></Intro>',
  '<Intro headline={}></Intro>',
  "<Intro headline={'H'}></Intro>",
  "<Intro headline={'He'}></Intro>",
  "<Intro headline={'Hey'}></Intro>",
  "<Intro headline={'Hey '}></Intro>",
  "<Intro headline={'Hey t'}></Intro>",
  "<Intro headline={'Hey th'}></Intro>",
  "<Intro headline={'Hey the'}></Intro>",
  "<Intro headline={'Hey ther'}></Intro>",
  "<Intro headline={'Hey there'}></Intro>",
  "<Intro headline={'Hey there,'}></Intro>",
  "<Intro headline={'Hey there, '}></Intro>",
  "<Intro headline={'Hey there, ' }></Intro>",
  "<Intro headline={'Hey there, ' +}></Intro>",
  "<Intro headline={'Hey there, ' + v}></Intro>",
  "<Intro headline={'Hey there, ' + vi}></Intro>",
  "<Intro headline={'Hey there, ' + vis}></Intro>",
  "<Intro headline={'Hey there, ' + visitor}></Intro>",
  "<Intro headline={'Hey there, ' + visitor.}></Intro>",
  "<Intro headline={'Hey there, ' + visitor.n}></Intro>",
  "<Intro headline={'Hey there, ' + visitor.name}></Intro>",
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>

    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      p
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>M</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My n</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My na</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My nam</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name i</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is S</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sa</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sac</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sach</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      p
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p></p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I b</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I bu</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I bui</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I buil</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build s</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build st</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stu</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuf</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff l</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff li</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff lik</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like t</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like th</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like thi</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this f</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this fo</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for m</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for mo</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for mon</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for mone</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for money</p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for money </p>
    </Intro>
  );`,
  `(
    <Intro headline={'Hey there, ' + visitor.name}>
      <p>My name is Sacha 👋</p>
      <p>I build stuff like this for money 💼</p>
    </Intro>
  );`,
];

let SyntaxHighlighter = ShitDoesntWork;

// @ts-ignore
SyntaxHighlighter = ShitDoesntWork.default || ShitDoesntWork;

SyntaxHighlighter.registerLanguage('jsx', jsx);

export function TypewriterIntro() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let done = false;
    let delay = 80;

    async function increment() {
      await sleep(delay);
      setCount((c) => {
        done = intros.length - 1 <= c + 2;
        delay = c % 5 === 0 ? 200 : 80;
        return c + 1;
      });

      if (!done) {
        await increment();
      }
    }
    increment();
  }, []);

  const codeStr = `export default function Home({ visitor }) {
  return ${intros[count]}
}`;

  return (
    <div>
      <SyntaxHighlighter
        language="jsx"
        style={hlStyle}
        className="!m-0 !p-12 h-[100dvh] flex items-center"
      >
        {codeStr}
      </SyntaxHighlighter>
    </div>
  );
}
