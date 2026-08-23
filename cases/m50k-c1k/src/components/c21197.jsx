import React from 'react';
const LABEL_21197 = 'component_21197';
export function Component21197({ value = 21197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21197, 'data-value': derived.doubled }, children);
}
export default Component21197;
