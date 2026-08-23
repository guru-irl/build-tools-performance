import React from 'react';
const LABEL_17032 = 'component_17032';
export function Component17032({ value = 17032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17032, 'data-value': derived.doubled }, children);
}
export default Component17032;
