import {Record} from 'immutable';

const CounterRecord = Record({
  count: 0,
});

export default class extends CounterRecord {
  increment() {
    const count = this.count + 1;
    return this.merge({count});
  }

  decrement() {
    const count = Math.max(0, this.count - 1);
    return this.merge({count});
  }

  reset() {
    return this.merge({count: 0});
  }
}
