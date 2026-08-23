import React from 'react';
const LABEL_23568 = 'component_23568';
export function Component23568({ value = 23568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23568, 'data-value': derived.doubled }, children);
}
export default Component23568;
