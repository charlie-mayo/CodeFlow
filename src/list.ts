type Item = {
  text: string;
  done: boolean;
};


export function buildList(lines: string[]): Item[] {
  return lines.map((line) => ({
    text: line,
    done: false
  }));
}


export function renderList(list: Item[]): string {
  const mappedList = list.map((item, i) => (
    `${i + 1}. ${item.done ? "[x]" : "[ ]"} ${item.text}`
  ));

  return mappedList.join("\n");
}


export function markDone(list: Item[], numbers: number[]): Item[] {
  return list.map((item, i) => (
    numbers.includes(i + 1) ? { ...item, done: true } : item
  ));
}


export function replacePending(list: Item[], lines: string[]): Item[] {
  const doneItems = list.filter((item) => item.done);

  const newItems = buildList(lines);

  return [...doneItems, ...newItems];
}
