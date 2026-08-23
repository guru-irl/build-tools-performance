import React from 'react';
const LABEL_5134 = 'component_5134';
export function Component5134({ value = 5134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5134, 'data-value': derived.doubled }, children);
}
export default Component5134;
