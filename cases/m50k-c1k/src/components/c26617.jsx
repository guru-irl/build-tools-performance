import React from 'react';
const LABEL_26617 = 'component_26617';
export function Component26617({ value = 26617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26617, 'data-value': derived.doubled }, children);
}
export default Component26617;
