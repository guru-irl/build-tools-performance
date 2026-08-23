import React from 'react';
const LABEL_22133 = 'component_22133';
export function Component22133({ value = 22133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22133, 'data-value': derived.doubled }, children);
}
export default Component22133;
