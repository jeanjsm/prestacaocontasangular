import { PrestacaoContasAngularPage } from './app.po';

describe('prestacao-contas-angular App', function() {
  let page: PrestacaoContasAngularPage;

  beforeEach(() => {
    page = new PrestacaoContasAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
