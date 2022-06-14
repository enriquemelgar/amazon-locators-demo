describe('Amazon web demo', function(){
  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.amazon.com/-/es/');
  });

  it('should have a title', function(){
    expect(browser.getTitle()).toEqual('Amazon.com. Gasta menos. Sonríe más.');
  });

  it('should have a search bar', function(){
    expect(element(by.id('twotabsearchtextbox')).isDisplayed()).toBe(true);
  });
});