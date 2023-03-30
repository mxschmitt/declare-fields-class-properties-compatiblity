const assert = require('assert');

{
  class Foo {
    constructor(private readonly incoming: number) { }
    value = this.incoming;
  }

  assert.equal(new Foo(42).value, 42);
}

{
  class Base {
    p1: string;
    p2: string;
    constructor(p1: string, p2: string) {
      this.p1 = p1;
      this.p2 = p2;
    }
  }

  class Derived extends Base {
    p1: string;
    declare p2: string;
  }

  const d = new Derived('value1', 'value2');
  assert.equal(d.p1, undefined);
  assert.equal(d.p2, 'value2');
}