import { WebgdgbsasPage } from './app.po';

describe('webgdgbsas App', () => {
  let page: WebgdgbsasPage;

  beforeEach(() => {
    page = new WebgdgbsasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
