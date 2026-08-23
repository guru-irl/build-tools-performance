import React from 'react';
const LABEL_23647 = 'component_23647';
export function Component23647({ value = 23647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23647, 'data-value': derived.doubled }, children);
}
export default Component23647;
