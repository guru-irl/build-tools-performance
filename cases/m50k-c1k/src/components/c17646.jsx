import React from 'react';
const LABEL_17646 = 'component_17646';
export function Component17646({ value = 17646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17646, 'data-value': derived.doubled }, children);
}
export default Component17646;
