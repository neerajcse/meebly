define(["../observer/event"], function(Event){
	
	function SiteModel(pages) {

		this.modelType = "site";

		// List of children should be stored in the model
		// for pesistence.
		this._pages = pages;


		// Events that this model supports.
		this.pageAdded = new Event(this);
		this.pageRemoved = new Event(this);
		this.pageEdited = new Event(this);

		// Events specifically for DAO
		this.modelUpdated = new Event(this);
	}


	SiteModel.prototype = {
		getPages : function() {
			// Return a clone so that no one can modify the 
			// model directly.
			return [].concat(this._pages);
		},

		addPage: function(page) {
			this._pages[page.id] = page;
			console.log("Updated model:");
			for(var key in this._pages) {
				console.log("Key:" + key + "value:" + this._pages[key]);
			}
			// Send the notifications to controller/view/DAO
			this.pageAdded.notify(page);

			this.modelUpdated.notify({type:this.modelType,
			 pages: this.getPages()});
		},

		removePageWithID: function(pageId) {
			delete this._pages[pageId];
			this.pageRemoved.notify(pageId);
			this.modelUpdated.notify({type:"site", 
				pages: this.getPages()});
		},

		editPage: function(args) {
			this._pages[args.id] = args.title;
			this.pageEdited.notify(args);
			for(var key in this._pages) {
				console.log("Key:" + key + "value:" + this._pages[key]);
			}

			this.modelUpdated.notify({type:"site", 
				pages: this.getPages()});
		}

	};

	return SiteModel;
});