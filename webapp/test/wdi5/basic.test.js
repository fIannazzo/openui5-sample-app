describe("My Login application", () => {
	it("before", async () => {
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
	});
});
