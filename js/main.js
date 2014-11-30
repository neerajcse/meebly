require(["observer/event", "Model/SiteModel", "View/SiteView", "Controller/SiteController", "View/TemplateButtonView"], 
	function(Event, SiteModel, SiteView, SiteController, TemplateButtonView){
		var model = new SiteModel([{id: 'test'}]);
		var element = {
			'domElement' : document.getElementById("container"),
			'sideBarWidget' : document.getElementById("templates-widget"),
		};

		var view = new SiteView(model, element);
		var controller = new SiteController(model, view);

		view.show();
		view.addPageInView({ id: '1' });
		view.addPageInView({ id: '2' });
});