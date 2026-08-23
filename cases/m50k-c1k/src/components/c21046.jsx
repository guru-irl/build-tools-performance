import React from 'react';
const LABEL_21046 = 'component_21046';
export function Component21046({ value = 21046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21046, 'data-value': derived.doubled }, children);
}
export default Component21046;
