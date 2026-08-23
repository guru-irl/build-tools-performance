import React from 'react';
const LABEL_10187 = 'component_10187';
export function Component10187({ value = 10187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10187, 'data-value': derived.doubled }, children);
}
export default Component10187;
