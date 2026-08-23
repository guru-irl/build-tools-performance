import React from 'react';
const LABEL_17081 = 'component_17081';
export function Component17081({ value = 17081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17081, 'data-value': derived.doubled }, children);
}
export default Component17081;
