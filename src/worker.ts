self.addEventListener("message", async (e: MessageEvent) => {
  const hoge = await import("./hoge");

  const p = <any>postMessage;
  p(hoge.m() + e.data);
});
