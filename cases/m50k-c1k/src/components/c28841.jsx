import React from 'react';
const LABEL_28841 = 'component_28841';
export function Component28841({ value = 28841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28841, 'data-value': derived.doubled }, children);
}
export default Component28841;
