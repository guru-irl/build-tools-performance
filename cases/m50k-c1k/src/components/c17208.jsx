import React from 'react';
const LABEL_17208 = 'component_17208';
export function Component17208({ value = 17208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17208, 'data-value': derived.doubled }, children);
}
export default Component17208;
