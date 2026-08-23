import React from 'react';
const LABEL_17475 = 'component_17475';
export function Component17475({ value = 17475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17475, 'data-value': derived.doubled }, children);
}
export default Component17475;
