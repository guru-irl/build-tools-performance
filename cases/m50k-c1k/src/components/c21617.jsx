import React from 'react';
const LABEL_21617 = 'component_21617';
export function Component21617({ value = 21617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21617, 'data-value': derived.doubled }, children);
}
export default Component21617;
