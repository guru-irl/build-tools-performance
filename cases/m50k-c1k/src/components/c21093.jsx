import React from 'react';
const LABEL_21093 = 'component_21093';
export function Component21093({ value = 21093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21093, 'data-value': derived.doubled }, children);
}
export default Component21093;
