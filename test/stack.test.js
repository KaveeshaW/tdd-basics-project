class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(item) {
    this.top++;
    this.items[this.top] = item;
  }

  pop() {
    if (this.top === -1) {
      return undefined;
    }
    const item = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return item;
  }
}

describe('My Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  })

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it('can push items to the top', () => {
    stack.push('item1');
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe('item1');
    expect(stack.items).toEqual({ 0: 'item1' });
  });

  it('can pop off', () => {
    stack.push('item1');
    const item = stack.pop();
    expect(item).toBe('item1');
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
});