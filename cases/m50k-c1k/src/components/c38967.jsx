import React from 'react';
const LABEL_38967 = 'component_38967';
export function Component38967({ value = 38967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38967, 'data-value': derived.doubled }, children);
}
export default Component38967;
