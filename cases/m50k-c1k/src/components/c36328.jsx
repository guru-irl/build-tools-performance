import React from 'react';
const LABEL_36328 = 'component_36328';
export function Component36328({ value = 36328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36328, 'data-value': derived.doubled }, children);
}
export default Component36328;
