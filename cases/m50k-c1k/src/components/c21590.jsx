import React from 'react';
const LABEL_21590 = 'component_21590';
export function Component21590({ value = 21590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21590, 'data-value': derived.doubled }, children);
}
export default Component21590;
