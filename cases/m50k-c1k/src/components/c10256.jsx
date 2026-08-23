import React from 'react';
const LABEL_10256 = 'component_10256';
export function Component10256({ value = 10256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10256, 'data-value': derived.doubled }, children);
}
export default Component10256;
