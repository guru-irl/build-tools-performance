import React from 'react';
const LABEL_10093 = 'component_10093';
export function Component10093({ value = 10093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10093, 'data-value': derived.doubled }, children);
}
export default Component10093;
