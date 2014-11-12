var StoreModel = Backbone.Model.extend({
	defaults: {
		brandName: '',
		website: '',
		yearFounded: null,
		isDepartmentStore: false
	},
	calculateAge: function() {
		var age = (new Date().getFullYear()) - this.get('yearFounded');
		this.set('age', age);

		if( this.get('isDepartmentStore') ) {
			this.fetchDepartments();
		}
	},
	initialize: function() {
		this.calculateAge();
	},
	fetchDepartments: function() {
		// make call for departments
	},
	triggerCustomEvent: function() {
		this.trigger('customEvent');
	}
});