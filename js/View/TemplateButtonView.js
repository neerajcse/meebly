define(["../observer/event"], function(Event){
	function TemplateButtonView(element) {
		this._element = element;
		this._nameField = element.nameField;
		this._addButton = element.addButton;
		

		this.pageAdded = new Event(this);

		var _this = this;

		console.log("Initializing add button");
		this._addButton.addEventListener('click', function(){
			_this.notifyIfNotEmpty();
			_this._nameField.value = "";
		});
	}

	TemplateButtonView.prototype = {

		notifyIfNotEmpty: function() {
			if (this._nameField.value == "") return;
			val = this._nameField.value;
			this.pageAdded.notify({ title: val, id: val });
			console.log("Triggering event with " + val);
		}
	};

	return TemplateButtonView;
});