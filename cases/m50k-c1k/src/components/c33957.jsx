import React from 'react';
const LABEL_33957 = 'component_33957';
export function Component33957({ value = 33957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33957, 'data-value': derived.doubled }, children);
}
export default Component33957;
