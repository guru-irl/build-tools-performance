import React from 'react';
const LABEL_1236 = 'component_1236';
export function Component1236({ value = 1236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1236, 'data-value': derived.doubled }, children);
}
export default Component1236;
