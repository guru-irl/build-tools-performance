import React from 'react';
const LABEL_20599 = 'component_20599';
export function Component20599({ value = 20599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20599, 'data-value': derived.doubled }, children);
}
export default Component20599;
