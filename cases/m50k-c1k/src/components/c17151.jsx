import React from 'react';
const LABEL_17151 = 'component_17151';
export function Component17151({ value = 17151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17151, 'data-value': derived.doubled }, children);
}
export default Component17151;
