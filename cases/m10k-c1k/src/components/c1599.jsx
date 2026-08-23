import React from 'react';
const LABEL_1599 = 'component_1599';
export function Component1599({ value = 1599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1599, 'data-value': derived.doubled }, children);
}
export default Component1599;
