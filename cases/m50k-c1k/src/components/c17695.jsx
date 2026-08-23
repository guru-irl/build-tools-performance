import React from 'react';
const LABEL_17695 = 'component_17695';
export function Component17695({ value = 17695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17695, 'data-value': derived.doubled }, children);
}
export default Component17695;
