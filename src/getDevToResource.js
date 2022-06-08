function wrapPromise(promise) {
  let status = "pending";
  let result;

  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const fetchDevTo = async () => {
  const resp = await fetch("https://dev.to/feed/");
  const devto = await resp.text();

  const parser = new DOMParser();
  const rss = parser.parseFromString(devto, "text/xml");

  return [...rss.querySelectorAll("item")].map((item) => {
    const title = item.querySelector("title").textContent;
    const creator = item.querySelector("creator").textContent;
    const guid = item.querySelector("guid").textContent;
    const description = item.querySelector("description").textContent;

    return {
      title,
      creator,
      guid,
      description,
    };
  });
};

export default () => wrapPromise(fetchDevTo());
