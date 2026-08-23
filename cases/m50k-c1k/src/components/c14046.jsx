import React from 'react';
const LABEL_14046 = 'component_14046';
export function Component14046({ value = 14046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14046, 'data-value': derived.doubled }, children);
}
export default Component14046;
