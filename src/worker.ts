const context: Worker = <any>self;

context.addEventListener("message", async (e: MessageEvent) => {
  const wasm = await import("../wasm/pkg");

  context.postMessage(wasm.calculate_working_time() + e.data);
});
