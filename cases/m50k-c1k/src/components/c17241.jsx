import React from 'react';
const LABEL_17241 = 'component_17241';
export function Component17241({ value = 17241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17241, 'data-value': derived.doubled }, children);
}
export default Component17241;
