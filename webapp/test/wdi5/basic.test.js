const _ui5Service = require("wdio-ui5-service").default;
// const wdioUI5Service = new _ui5Service(); 
// await wdioUI5Service.injectUI5();

describe("My Login application", () => {
	it("before", async () => {
		//await browser.url(`http://localhost:8080/index.html`);
		//await $("div[id=container-todo---app]").waitForExist();
		//await wdioUI5Service.injectUI5();
		const selector = {
			forceSelect: true,
			selector: {
				id: "container-todo---app--todoList",
                interaction: "root"
			},
		};
		const oList = await browser.asControl(selector);
		console.log("List ID " + (await oList.getId()));
        expect((await oList.getItems()).length).toEqual(2);
        //console.log("Table ID " + (await oList.getItems()));
	});
});
