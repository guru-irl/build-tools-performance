import React from 'react';
const LABEL_24832 = 'component_24832';
export function Component24832({ value = 24832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24832, 'data-value': derived.doubled }, children);
}
export default Component24832;
