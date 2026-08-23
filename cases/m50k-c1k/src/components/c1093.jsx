import React from 'react';
const LABEL_1093 = 'component_1093';
export function Component1093({ value = 1093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1093, 'data-value': derived.doubled }, children);
}
export default Component1093;
