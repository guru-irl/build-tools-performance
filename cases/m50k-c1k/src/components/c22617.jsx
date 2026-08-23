import React from 'react';
const LABEL_22617 = 'component_22617';
export function Component22617({ value = 22617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22617, 'data-value': derived.doubled }, children);
}
export default Component22617;
