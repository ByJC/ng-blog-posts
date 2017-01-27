import { PwsAdminPage } from './app.po';

describe('pws-admin App', function() {
  let page: PwsAdminPage;

  beforeEach(() => {
    page = new PwsAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
