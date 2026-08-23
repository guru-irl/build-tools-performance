import React from 'react';
const LABEL_12967 = 'component_12967';
export function Component12967({ value = 12967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12967, 'data-value': derived.doubled }, children);
}
export default Component12967;
