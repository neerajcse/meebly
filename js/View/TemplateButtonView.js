define(["../observer/event"], function(Event){
	function TemplateButtonView(element) {
		this._element = element;
		this._nameField = element.nameField;
		this._addButton = element.addButton;
		

		this.pageAdded = new Event(this);

		var _this = this;

		this._nameField.addEventListener('click', function() {
			_this.makeNameFieldEditable();
		});

		this._addButton.addEventListener('click', function(){
			_this.ifEditableSendAddRequestAndDisable();
		});
	}

	TemplateButtonView.prototype = {
		makeNameFieldEditable: function() {
			_this._nameField.readOnly = false;
		},

		ifEditableSendAddRequestAndDisable: function() {
			if (_this._nameField.readOnly) {
				_this.pageAdded.notify({ title: _this._nameField.value });
				console.log("Triggering event with " + _this._nameField.value);
				_this._nameField.value = "";
				_this._nameField.readOnly = true;

			}
			
		}
	};

	return TemplateButtonView;
});