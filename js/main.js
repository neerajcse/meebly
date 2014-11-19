require(["observer/event", "Model/PageModel", "View/PageView", "Controller/PageController"], 
	function(Event, PageModel, PageView, PageController){
	var model = new PageModel(['test']);
	var element = {
		'domElement' : document.getElementById("myUl"),
		'addButton' : document.getElementById("myPlusButton"),
		'removeButton': document.getElementById("myMinusButton"),
	};
	var view = new PageView(model, element);
	var controller = new PageController(model, view);

	view.show();
});