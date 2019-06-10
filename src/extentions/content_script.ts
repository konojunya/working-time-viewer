chrome.runtime.sendMessage({
  from: "content",
  subject: "showPageAction"
});

chrome.runtime.onMessage.addListener((msg, _, response) => {
  if (msg.from === "popup" && msg.subject === "DOMInfo") {
    const project_columns = document.querySelectorAll(".project-column");
    const project_array = Object.keys(project_columns).map(
      key => project_columns[key as any]
    );
    const target_column = project_array.find(project => {
      const h4 = project.querySelector("h4");
      const p = h4!.querySelector(".js-project-column-name")!;
      const title = (p as any).innerText;
      return title === "Done";
    });
    const domInfo = {
      content: target_column ? target_column.outerHTML : null
    };
    response(domInfo);
  }
});
