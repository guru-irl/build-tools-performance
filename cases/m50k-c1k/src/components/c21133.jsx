import React from 'react';
const LABEL_21133 = 'component_21133';
export function Component21133({ value = 21133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21133, 'data-value': derived.doubled }, children);
}
export default Component21133;
