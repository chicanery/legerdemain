import { LegerdemainPage } from './app.po';

describe('legerdemain App', function() {
  let page: LegerdemainPage;

  beforeEach(() => {
    page = new LegerdemainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
