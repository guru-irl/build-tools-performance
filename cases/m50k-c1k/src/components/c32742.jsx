import React from 'react';
const LABEL_32742 = 'component_32742';
export function Component32742({ value = 32742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32742, 'data-value': derived.doubled }, children);
}
export default Component32742;
