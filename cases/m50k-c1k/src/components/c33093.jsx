import React from 'react';
const LABEL_33093 = 'component_33093';
export function Component33093({ value = 33093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33093, 'data-value': derived.doubled }, children);
}
export default Component33093;
