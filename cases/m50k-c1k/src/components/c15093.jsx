import React from 'react';
const LABEL_15093 = 'component_15093';
export function Component15093({ value = 15093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15093, 'data-value': derived.doubled }, children);
}
export default Component15093;
