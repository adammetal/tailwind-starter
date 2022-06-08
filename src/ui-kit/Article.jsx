export function Article({ children }) {
  return <article className="m-4 p-4 block bg-blue-200">{children}</article>;
}

export function Title({ children }) {
  return <h1 className="m-0 p-0 text-4xl bg-blue-400">{children}</h1>;
}

export function Author({ children }) {
  return <h2 className="m-0 p-0 text-base italic">{children}</h2>;
}

export function Content({ children }) {
  return <p className="p-0 m-4">{children}</p>;
}
