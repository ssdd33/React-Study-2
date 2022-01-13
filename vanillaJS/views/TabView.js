import { qs, qsAll } from "../helper";
import { delegate } from "../utils";
import { View } from "../mvc/view";
import { Template } from "./Template";

export class TabView extends View {
  constructor() {
    super(qs("#tab-view"));

    this.template = new Template();
    this.bindEvents();
  }

  show(tab) {
    this.element.innerHTML = this.template.getTabList();

    qsAll("li", this.element).forEach((li) => {
      li.className = li.dataset.tab === tab ? "active" : "";
    });
    super.show();
  }
  bindEvents() {
    delegate(this.element, "click", (event) => this.handleClick(event));
  }

  handleClick(event) {
    const value = event.target.dataset.tab;
    this.emit("@change", { value });
  }
}
