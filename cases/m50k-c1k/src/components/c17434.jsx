import React from 'react';
const LABEL_17434 = 'component_17434';
export function Component17434({ value = 17434, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17434, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17434, 'data-value': derived.doubled }, children);
}
export default Component17434;
