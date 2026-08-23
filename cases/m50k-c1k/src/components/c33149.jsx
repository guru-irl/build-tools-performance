import React from 'react';
const LABEL_33149 = 'component_33149';
export function Component33149({ value = 33149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33149, 'data-value': derived.doubled }, children);
}
export default Component33149;
