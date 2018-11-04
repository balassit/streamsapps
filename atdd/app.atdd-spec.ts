import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title correctly', () => {
    const expectedTitle: any = 'streamsapps';
    page.navigateTo()
      .then(() => page.getPageTitle())
      .then(title => expect(page.getPageTitle()).toEqual(expectedTitle));
  });
});
