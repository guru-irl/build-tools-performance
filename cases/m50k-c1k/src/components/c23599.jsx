import React from 'react';
const LABEL_23599 = 'component_23599';
export function Component23599({ value = 23599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23599, 'data-value': derived.doubled }, children);
}
export default Component23599;
