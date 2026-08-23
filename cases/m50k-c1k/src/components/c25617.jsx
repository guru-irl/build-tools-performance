import React from 'react';
const LABEL_25617 = 'component_25617';
export function Component25617({ value = 25617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25617, 'data-value': derived.doubled }, children);
}
export default Component25617;
