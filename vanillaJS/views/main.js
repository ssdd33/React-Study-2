import { Controller } from "../mvc/controller";
import { Store } from "../mvc/store";
import { storage } from "../mvc/storage";
import { FormView } from "./FormView";
import { ResultView } from "./ResultView";
import { TabView } from "./TabView";
import { KeywordView } from "./keywordView/KeywordView";
import { HistoryView } from "./historyView/HistoryView";

function main() {
  const store = new Store(storage);
  const views = {
    formView: new FormView(),
    resultView: new ResultView(),
    tabView: new TabView(),
    keywordView = new KeywordView(),
    historyView = new HistoryView()
  };
  new Controller(store, views);
}

document.addEventListener("DOMContentLoaded", main);
