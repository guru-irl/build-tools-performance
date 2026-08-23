import React from 'react';
const LABEL_39899 = 'component_39899';
export function Component39899({ value = 39899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39899, 'data-value': derived.doubled }, children);
}
export default Component39899;
