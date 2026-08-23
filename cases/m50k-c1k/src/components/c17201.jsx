import React from 'react';
const LABEL_17201 = 'component_17201';
export function Component17201({ value = 17201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17201, 'data-value': derived.doubled }, children);
}
export default Component17201;
