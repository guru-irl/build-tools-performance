import React from 'react';
const LABEL_17243 = 'component_17243';
export function Component17243({ value = 17243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17243, 'data-value': derived.doubled }, children);
}
export default Component17243;
