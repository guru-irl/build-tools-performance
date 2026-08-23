import React from 'react';
const LABEL_9967 = 'component_9967';
export function Component9967({ value = 9967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9967, 'data-value': derived.doubled }, children);
}
export default Component9967;
