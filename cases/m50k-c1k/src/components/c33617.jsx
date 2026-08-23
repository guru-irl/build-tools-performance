import React from 'react';
const LABEL_33617 = 'component_33617';
export function Component33617({ value = 33617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33617, 'data-value': derived.doubled }, children);
}
export default Component33617;
