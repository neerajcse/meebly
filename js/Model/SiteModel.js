define(["../observer/event"], function(Event){
	
	function SiteModel(pages) {

		// List of children should be stored in the model
		// for pesistence.
		this._pages = pages;


		// Events that this model supports.
		this.pageAdded = new Event(this);
		this.pageRemoved = new Event(this);

		// Events specifically for DAO
		this.modelUpdated = new Event(this);
	}


	SiteModel.prototype = {
		getPages : function() {
			//Return a clone so that no one can modify the 
			//real variable.
			return [].concat(this._pages);
		},

		addPage: function(page) {
			this._pages.push(page);

			// Send the notifications to controller/view/DAO
			this.pageAdded.notify({element: page});

			this.modelUpdated.notify({type:"site", pages: getPages()});
		},

		removePageAtPosition: function(position) {
			var page;

			page = this._pages[position];
			this._pages.splice(position, 1);
			this.pageRemoved.notify({element: page});

			this.modelUpdated.notify({type:"site", pages: getPages()});
		},

	};

	return SiteModel;
});