import React from 'react';
const LABEL_14333 = 'component_14333';
export function Component14333({ value = 14333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14333, 'data-value': derived.doubled }, children);
}
export default Component14333;
