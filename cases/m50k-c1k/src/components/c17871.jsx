import React from 'react';
const LABEL_17871 = 'component_17871';
export function Component17871({ value = 17871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17871, 'data-value': derived.doubled }, children);
}
export default Component17871;
