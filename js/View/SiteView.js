define(["../observer/event"], function(Event){
	function SiteView(sitemodel, element, addButton) {
		this._model = sitemodel;
		this._element = element;
		this._addButton = addButton;

		this.pageAdded = new Event(this);
		this.pageRemoved = new Event(this);

		var _this = this;

		_this._addButton.pageAdded.attach(function(target, e) {
			_this.addPageInView(e);
		});
	}

	SiteView.prototype = {
		show : function() {
			this.redrawSideBarAndPages();
		},

		redrawSideBarAndPages: function() {
			var domElement, sideBarWidget, pages, page;

			domElement = this._element.domElement;
			sideBarWidget = this._element.sideBarWidget;

			pages = this._model.getPages();
			for (page in pages) {
				this.addPageInView(pages[page]);
			}
		},

		generateHTMLForPage: function(page) {
			return '<div id="page-' + page.id +
					'">New page with id ' + page.id+'</div>'; 
		},

		generateButtonForSideWidget: function(page) {
			return '<button>' + page.id + '</button></br>';
		},

		addPageInView: function(page) {
			domElement = this._element.domElement;
			sideBarWidget = this._element.sideBarWidget;
			domElement.innerHTML += 
				this.generateHTMLForPage(page);
			sideBarWidget.innerHTML += 
				this.generateButtonForSideWidget(page);
			sideBarWidget.style.height = sideBarWidget.offsetHeight + 30 + "px";
		},

		removePageFromView: function(pageId) {

		},
	};

	return SiteView;
});