import { Pr4Page } from './app.po';

describe('pr4 App', () => {
  let page: Pr4Page;

  beforeEach(() => {
    page = new Pr4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
