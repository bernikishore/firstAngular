import { MyHelloPage } from './app.po';

describe('my-hello App', () => {
  let page: MyHelloPage;

  beforeEach(() => {
    page = new MyHelloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
