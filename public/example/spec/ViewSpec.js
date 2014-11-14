describe("Tests for a custom Backbone Model", function() {
  var macys,
  	macysView;

  beforeEach(function() {
		macys = new StoreModel({
      brandName: 'macys',
      website: 'http://www.macys.com',
      yearFounded: 1858,
      isDepartmentStore: true
    });

  	spyOn(StoreView.prototype, 'render').and.callThrough();

    macysView = new StoreView({
      model: macys
    });
  });

  it("can test for default events like a ul click", function() {
  	expect(macysView.events['click ul li']).toBeDefined();
  	expect(macysView.events['click ul li']).toEqual('clickCallback');
  });

  it("can test for reactions to Model-level events", function() {
  	macys.set('isDepartmentStore', false);
  	expect(macysView.render).toHaveBeenCalled();
  });

  it("can test for functional DOM changes", function() {
  	var oldLength, newLength; 
  	$('body').append(macysView.render().$el);
  	
  	oldLength = macysView.$('li').length;

  	macysView.$('ul li').click();
  	
  	newLength = macysView.$('li').length;

  	expect(newLength - oldLength).toEqual(1);

  	macysView.remove();
  });
});