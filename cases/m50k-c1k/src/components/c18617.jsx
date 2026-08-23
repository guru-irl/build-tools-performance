import React from 'react';
const LABEL_18617 = 'component_18617';
export function Component18617({ value = 18617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18617, 'data-value': derived.doubled }, children);
}
export default Component18617;
