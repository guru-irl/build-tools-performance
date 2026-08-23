import React from 'react';
const LABEL_33233 = 'component_33233';
export function Component33233({ value = 33233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33233, 'data-value': derived.doubled }, children);
}
export default Component33233;
