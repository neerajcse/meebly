define(['../Model/SiteModel'], function(SiteModel){
	
	function DAO(REST_URL, model) {
		this._modelType = model.modelType;
		this._url = REST_URL + "/" + this._modelType;
	}

	DAO.prototype = {
		put : function() {

		},
		get: function() {

		},
		post: function() {

		},
		delete: function() {
			
		},
	};

});