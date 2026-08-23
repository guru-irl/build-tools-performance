import React from 'react';
const LABEL_44495 = 'component_44495';
export function Component44495({ value = 44495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44495, 'data-value': derived.doubled }, children);
}
export default Component44495;
