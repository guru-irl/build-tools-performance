import React from 'react';
const LABEL_33484 = 'component_33484';
export function Component33484({ value = 33484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33484, 'data-value': derived.doubled }, children);
}
export default Component33484;
