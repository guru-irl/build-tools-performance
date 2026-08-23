import React from 'react';
const LABEL_21917 = 'component_21917';
export function Component21917({ value = 21917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21917, 'data-value': derived.doubled }, children);
}
export default Component21917;
