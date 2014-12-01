require(["observer/event", "Model/SiteModel", "View/SiteView", "Controller/SiteController", "View/TemplateButtonView"], 
	function(Event, SiteModel, SiteView, SiteController, TemplateButtonView){
		
		var addButtonElement = {
			'nameField' : document.getElementById('name-field'),
			'addButton' : document.getElementById('add-button'),
		};
		//console.log("test");
		var templateButton = new TemplateButtonView(addButtonElement);


		var model = new SiteModel([]);
		var element = {
			'domElement' : document.getElementById("container"),
			'sideBarWidget' : document.getElementById("templates-widget"),
		};

		var view = new SiteView(model, element, templateButton);
		var controller = new SiteController(model, view);

		view.show();
});