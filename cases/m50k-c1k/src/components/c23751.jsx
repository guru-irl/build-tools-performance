import React from 'react';
const LABEL_23751 = 'component_23751';
export function Component23751({ value = 23751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23751, 'data-value': derived.doubled }, children);
}
export default Component23751;
