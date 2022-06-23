import { BasesPage } from './app.po';

describe('bases App', () => {
  let page: BasesPage;

  beforeEach(() => {
    page = new BasesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
