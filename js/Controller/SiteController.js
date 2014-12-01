define(["../observer/event"], function(Event) {

	function SiteController(model, view) {
		this._model = model;
		this._view = view;

		var _this = this;

		
		// Observe the view
		this._view.pageAdded.attach(function(sender, args) {
			console.log("Got page add event from view " + args);
			args.id = new Date().getUTCMilliseconds();
			_this.addPage(args);
		});

		/**
		this._view.addButtonClicked.attach(function(){
			_this.addChild();
		});

		this._view.removeButtonClicked.attach(function(){
			_this.removeChild();
		});
		**/

	}


	SiteController.prototype = {
		/**addChild: function() {
			console.log("add");
			var item = Math.random() * 10;
			console.log(item);

			if (item) {
				this._model.addChild(item);
			}
		},

		removeChild: function() {
			if(this._model.getChildren().length > 0) {
				console.log("attempting to remove");
				this._model.removeChildAtPosition(0);
			}
		},**/
		addPage: function(page) {
			this._model.addPage(page);
		}

	};

	return SiteController;
	
});