import React from 'react';
const LABEL_17967 = 'component_17967';
export function Component17967({ value = 17967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17967, 'data-value': derived.doubled }, children);
}
export default Component17967;
