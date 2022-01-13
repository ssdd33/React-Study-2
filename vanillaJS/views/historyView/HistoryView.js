import { qs } from "../../helper";
import { delegate } from "../../utils";
import { KeywordView } from "../keywordView/KeywordView";
import { Template } from "./Template";

export class HistoryView extends KeywordView {
  constructor() {
    super(qs("#history-view"), new Template());
  }

  bindEvents() {
    delegate(this.element, "click", "button.btn-remove", (event) =>
      this.handleClickRemoveButton(event)
    );
    super.bindEvents();
  }
  handleClickRemoveButton(event) {
    const { keyword } = event.target.parentElement.dataset;
    this.emit("@remove", { value: keyword });
  }
}
