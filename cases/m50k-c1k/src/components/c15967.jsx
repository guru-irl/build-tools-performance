import React from 'react';
const LABEL_15967 = 'component_15967';
export function Component15967({ value = 15967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15967, 'data-value': derived.doubled }, children);
}
export default Component15967;
