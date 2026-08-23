import React from 'react';
const LABEL_17133 = 'component_17133';
export function Component17133({ value = 17133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17133, 'data-value': derived.doubled }, children);
}
export default Component17133;
