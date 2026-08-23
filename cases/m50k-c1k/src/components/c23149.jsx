import React from 'react';
const LABEL_23149 = 'component_23149';
export function Component23149({ value = 23149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23149, 'data-value': derived.doubled }, children);
}
export default Component23149;
