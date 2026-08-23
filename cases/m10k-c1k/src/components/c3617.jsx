import React from 'react';
const LABEL_3617 = 'component_3617';
export function Component3617({ value = 3617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3617, 'data-value': derived.doubled }, children);
}
export default Component3617;
