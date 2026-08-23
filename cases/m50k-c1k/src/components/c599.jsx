import React from 'react';
const LABEL_599 = 'component_599';
export function Component599({ value = 599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_599, 'data-value': derived.doubled }, children);
}
export default Component599;
