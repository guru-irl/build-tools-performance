import React from 'react';
const LABEL_28967 = 'component_28967';
export function Component28967({ value = 28967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28967, 'data-value': derived.doubled }, children);
}
export default Component28967;
