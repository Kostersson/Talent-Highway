import { SolinorTalentHighwayPage } from './app.po';

describe('solinor-talent-highway App', function() {
  let page: SolinorTalentHighwayPage;

  beforeEach(() => {
    page = new SolinorTalentHighwayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
