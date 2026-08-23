import React from 'react';
const LABEL_17957 = 'component_17957';
export function Component17957({ value = 17957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17957, 'data-value': derived.doubled }, children);
}
export default Component17957;
