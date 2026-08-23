import React from 'react';
const LABEL_33459 = 'component_33459';
export function Component33459({ value = 33459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33459, 'data-value': derived.doubled }, children);
}
export default Component33459;
