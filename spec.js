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
    browser.waitForAngularEnabled(false);
    browser.get('https://staging-app.rydoo.com/');
    //var user = element(by.id('username'));
  //expect((user).isPresent()).toBeTruthy(); 
  //});
  //  browser.wait(function() {
  //     return element(by.id('username')).isPresent();
  //  }, 5000);
    element(by.id('username')).sendKeys('testeraffa16@gmail.com');
    element(by.id('nextButton')).click();
    browser.pause();
    expect(element(by.id('password')).isDisplayed());
    expect(element(by.id('loginButton')).isDisplayed());
    element(by.id('password')).sendKeys('test1605');
    element(by.id('loginButton')).click();
    browser.sleep(30000);
    expect(browser.getCurrentUrl()).toEqual('https://staging-app.rydoo.com/dashboard');
  });
});
