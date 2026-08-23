import React from 'react';
const LABEL_1485 = 'component_1485';
export function Component1485({ value = 1485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1485, 'data-value': derived.doubled }, children);
}
export default Component1485;
