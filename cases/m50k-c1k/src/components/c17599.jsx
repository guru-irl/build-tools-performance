import React from 'react';
const LABEL_17599 = 'component_17599';
export function Component17599({ value = 17599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17599, 'data-value': derived.doubled }, children);
}
export default Component17599;
