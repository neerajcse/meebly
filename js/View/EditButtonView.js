define(["../observer/event"], function(Event){
	function EditButtonView(element) {
		this._element = element;
		this._pageId = element.pageID;
		this._nameField = element.nameField;
		this._deleteButton = element.deleteButton;
		this._editButton = element.editButton;
		

		this.pageRemoved = new Event(this);
		this.pageTitleEdited = new Event(this);

		var _this = this;

		console.log("Initializing add button" + this._pageId);
		
		this._deleteButton.addEventListener('click', function(){
			console.log("Remove event for " + _this._pageId);
			_this.pageRemoved.notify(_this._pageId);
		});

		this._editButton.addEventListener('click', function() {
			//_this.notifyIfNotEmpty();
		});

		this._nameField.addEventListener('keypress', function(e){
			
		});
	}

	EditButtonView.prototype = {
		notifyIfNotEmpty: function() {
			if (this._nameField.value == "") return;
			val = this._nameField.value;
			this.pageTitleEdited.notify(val);
			console.log("Triggering edit event with " + val);
		}
	};

	return EditButtonView;
});