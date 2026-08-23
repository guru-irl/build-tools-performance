import React from 'react';
const LABEL_3899 = 'component_3899';
export function Component3899({ value = 3899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3899, 'data-value': derived.doubled }, children);
}
export default Component3899;
