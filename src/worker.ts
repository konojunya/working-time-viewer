const context: Worker = <any>self;

context.addEventListener("message", async (e: MessageEvent) => {
  const wasm = await import("../wasm/pkg");

  context.postMessage(wasm.greeting() + e.data);
});
