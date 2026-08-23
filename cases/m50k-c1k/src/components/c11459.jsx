import React from 'react';
const LABEL_11459 = 'component_11459';
export function Component11459({ value = 11459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11459, 'data-value': derived.doubled }, children);
}
export default Component11459;
