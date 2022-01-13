import { Tab } from "../types";

export class Controller {
  constructor(
    store,
    { formView, resultView, tabView, keywordView, historyView }
  ) {
    this.store = store;
    this.formView = formView;
    this.resultView = resultView;
    this.tabView = tabView;
    this.selectedTab = Tab.KEYWORD;
    this.keywordView = keywordView;
    this.historyView = historyView;
    this.subscribeViewEvents();
  }

  subscribeViewEvents() {
    this.formView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", (_) => this.reset());

    this.tabView.on("@change", (event) => this.changeTab(event.detail.value));
    this.keywordView.on("@click", (event) => this.search(event.detail.value));
    this.historyView
      .on("@click", (event) => this.search(event.detail.value))
      .on("@remove", (event) => this.removeHistory(event.detail.value));
  }

  search(keyword) {
    this.store.search(keyword);
    this.render();
  }
  reset() {
    this.store.searchResult = [];
    this.store.searchKeyword = "";
    this.render();
  }
  render() {
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }
    this.resultView.hide();
    this.tabView.show(this.store.selectedTab);

    if (this.store.selectedTab === Tab.KEYWORD) {
      this.keywordView.show(this.store.getKeywordList());
      this.historyView.hide();
    } else if (this.store.selectedTab === Tab.HISTORY) {
      this.keywordView.hide();
      this.historyView.show(this.store.getHistoryList());
    } else {
      throw "사용할 수 없는 탭";
    }
  }

  changeTab(tab) {
    this.store.selectedTab = tab;
    this.render();
  }

  renderSearchResult() {
    this.formView.show(this.store.searchKeyword);
    this.resultView.show(this.store.searchResult);

    this.tabView.hide();
    this.keywordView.hide();
    this.historyView.hide();
  }
  removeHistory(keyword) {
    this.store.removeHistory(keyword);
    this.render();
  }
}
