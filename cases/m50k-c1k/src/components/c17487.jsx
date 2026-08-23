import React from 'react';
const LABEL_17487 = 'component_17487';
export function Component17487({ value = 17487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17487, 'data-value': derived.doubled }, children);
}
export default Component17487;
