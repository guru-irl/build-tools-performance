import React from 'react';
const LABEL_459 = 'component_459';
export function Component459({ value = 459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_459, 'data-value': derived.doubled }, children);
}
export default Component459;
