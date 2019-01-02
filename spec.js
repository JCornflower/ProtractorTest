/*describe('Enter GURU99 Name', function() {
    it('should add a Name as GURU99', function() {
    browser.get('https://angularjs.org');
    element(by.model('yourName')).sendKeys('GURU99');
     var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
   expect(guru.getText()).toEqual('Hello GURU99!');
     });
   });*/


describe('Rydoo title', function() {
  it('should have a title', function() {
    browser.get('https://staging-app.rydoo.com/');
    browser.wait(function() {
      return element(by.id('username')).isPresent();
   }, 5000);
    element(by.id('username')).sendKeys('testeraffa16@gmail.com');
    element(by.id('nextButton')).click();
    element(by.id('password')).sendKeys('test1605');
    element(by.id('loginButton')).click();
    expect(browser.getTitle()).toEqual('Rydoo');
  });
});