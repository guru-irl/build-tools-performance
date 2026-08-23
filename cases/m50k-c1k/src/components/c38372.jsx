import React from 'react';
const LABEL_38372 = 'component_38372';
export function Component38372({ value = 38372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38372, 'data-value': derived.doubled }, children);
}
export default Component38372;
