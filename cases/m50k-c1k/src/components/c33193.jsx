import React from 'react';
const LABEL_33193 = 'component_33193';
export function Component33193({ value = 33193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33193, 'data-value': derived.doubled }, children);
}
export default Component33193;
