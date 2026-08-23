import React from 'react';
const LABEL_30967 = 'component_30967';
export function Component30967({ value = 30967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30967, 'data-value': derived.doubled }, children);
}
export default Component30967;
