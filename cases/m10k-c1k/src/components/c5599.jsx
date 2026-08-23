import React from 'react';
const LABEL_5599 = 'component_5599';
export function Component5599({ value = 5599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5599, 'data-value': derived.doubled }, children);
}
export default Component5599;
