define(["../observer/event", "../View/EditButtonView"], function(Event, EditButtonView){
	function SiteView(sitemodel, element, addButton) {
		this._model = sitemodel;
		this._element = element;
		this._addButton = addButton;

		this.pageAdded = new Event(this);
		this.pageRemoved = new Event(this);

		this._buttonViews = [];

		var _this = this;

		_this._addButton.pageAdded.attach(function(source, e) {
			//_this.addPageInView(e);
			_this.pageAdded.notify(e);
		});

		_this._model.pageAdded.attach(function(source, e){
			_this.addPageInView(e);
		});
	}

	SiteView.prototype = {
		show : function() {
			this.redrawSideBarAndPages();
		},

		redrawSideBarAndPages: function() {
			var domElement, sideBarWidget, pages, page;

			pages = this._model.getPages();
			for (page in pages) {
				this.addPageInView(pages[page]);
			}
		},

		generateHTMLForPage: function(page) {
			return '<div id="page-' + page.id +
					'">New page with title' + page.title + '</div>'; 
		},

		generateButtonForSideWidget: function(page) {
			return '<div class="edit-page-group" id="rembutton-' + page.id + '">' +
						'<div class="holder">'+
							'<input class="title" id="title-' + page.id +'" value="' +  page.title + '"/>' +
						'</div>'+
						'<div class="edit-button" id="edit-' + page.id + '"></div>' +
						'<div class="delete-button" id="delete-' + page.id + '"></div>' + 
				   '</div>';
		},

		addPageInView: function(page) {
			domElement = this._element.domElement;
			sideBarWidget = this._element.sideBarWidget;
			pageTabs = this._element.pageTabs;

			domElement.innerHTML += 
				this.generateHTMLForPage(page);
			sideBarWidget.innerHTML += 
				this.generateButtonForSideWidget(page);
			sideBarWidget.style.height = sideBarWidget.offsetHeight + 30 + "px";

			//These button will have remove/edit options. Listen for those events.
			var _this = this;
			
			this._buttonViews.push(page.id);
			
			
			for(var id in this._buttonViews) {

				var editButtonView = new EditButtonView({'pageID' : this._buttonViews[id]});
				editButtonView.pageRemoved.attach(function(source, args){
					_this.removePageFromView(args);
				});

				editButtonView.pageTitleEdited.attach(function(source, args) {
					_this.editPageTitle(args.id, args.title);
				});
			}
			
		},

		removePageFromView: function(pageId) {
			console.log("Page remove notification for "  + pageId);
		},

		editPageTitle: function(pageId, pageTitle) {
			console.log("New page title for " + pageId + " is " + pageTitle);
		}
	};

	return SiteView;
});