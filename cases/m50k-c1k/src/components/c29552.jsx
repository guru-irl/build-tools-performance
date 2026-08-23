import React from 'react';
const LABEL_29552 = 'component_29552';
export function Component29552({ value = 29552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29552, 'data-value': derived.doubled }, children);
}
export default Component29552;
