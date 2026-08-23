import React from 'react';
const LABEL_11599 = 'component_11599';
export function Component11599({ value = 11599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11599, 'data-value': derived.doubled }, children);
}
export default Component11599;
