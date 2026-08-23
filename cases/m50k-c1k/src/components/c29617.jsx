import React from 'react';
const LABEL_29617 = 'component_29617';
export function Component29617({ value = 29617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29617, 'data-value': derived.doubled }, children);
}
export default Component29617;
