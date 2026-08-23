import React from 'react';
const LABEL_17893 = 'component_17893';
export function Component17893({ value = 17893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17893, 'data-value': derived.doubled }, children);
}
export default Component17893;
