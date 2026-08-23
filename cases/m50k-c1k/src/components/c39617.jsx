import React from 'react';
const LABEL_39617 = 'component_39617';
export function Component39617({ value = 39617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39617, 'data-value': derived.doubled }, children);
}
export default Component39617;
