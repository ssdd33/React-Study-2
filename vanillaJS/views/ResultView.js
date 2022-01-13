import { View } from "../mvc/view";
import { Template } from "./Template";
import { qs } from "../helper";

export class ResultView extends View {
  constructor() {
    super(qs("#result-view"));

    this.template = new Template();
  }

  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.template.getList(data)
        : this.template.getEmptyMessage();

    super.show();
  }
}
