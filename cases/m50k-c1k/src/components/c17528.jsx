import React from 'react';
const LABEL_17528 = 'component_17528';
export function Component17528({ value = 17528, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17528, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17528, 'data-value': derived.doubled }, children);
}
export default Component17528;
