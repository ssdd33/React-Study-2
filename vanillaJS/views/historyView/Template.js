export class Template {
  getEmptyMessage() {
    return `검색 이력이 없습니다.`;
  }
  getList(data = []) {
    return `<ul class="list">${data.map(this._getItem).join("")}</ul>`;
  }
  _getItem({ keyword, date }) {
    const formattedDate = date.toLocaleString("ko-KR", {
      hour12: false,
      dateStyle: "short",
      timeStyle: "medium",
    });
    return `
    <li data-keyword="${keyword}">
    ${keyword}<span class="date>${formattedDate}</span>
    <button class="btn remove"></button>
    </li>`;
  }
}
