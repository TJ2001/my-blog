import { ZPage } from './app.po';

describe('z App', () => {
  let page: ZPage;

  beforeEach(() => {
    page = new ZPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
