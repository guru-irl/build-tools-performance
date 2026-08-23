import React from 'react';
const LABEL_23957 = 'component_23957';
export function Component23957({ value = 23957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23957, 'data-value': derived.doubled }, children);
}
export default Component23957;
