import React from 'react';
const LABEL_10599 = 'component_10599';
export function Component10599({ value = 10599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10599, 'data-value': derived.doubled }, children);
}
export default Component10599;
