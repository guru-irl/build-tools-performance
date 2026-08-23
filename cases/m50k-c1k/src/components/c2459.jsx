import React from 'react';
const LABEL_2459 = 'component_2459';
export function Component2459({ value = 2459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2459, 'data-value': derived.doubled }, children);
}
export default Component2459;
