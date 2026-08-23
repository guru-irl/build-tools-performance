import React from 'react';
const LABEL_10617 = 'component_10617';
export function Component10617({ value = 10617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10617, 'data-value': derived.doubled }, children);
}
export default Component10617;
