describe('Amazon web demo', function(){
  beforeEach(function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.amazon.com/-/es/');
  });

  it('should have a title', function(){
    expect(browser.getTitle()).toEqual('Amazon.com');
  });
});