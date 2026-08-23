import React from 'react';
const LABEL_12709 = 'component_12709';
export function Component12709({ value = 12709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12709, 'data-value': derived.doubled }, children);
}
export default Component12709;
