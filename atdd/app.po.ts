
import { browser, by, element } from 'protractor';

export class AppPage {
 navigateTo() {
    browser.ignoreSynchronization = true;
    return browser.get('/');
  }

  getPageTitle() {
    return browser.getTitle();
  }
}
