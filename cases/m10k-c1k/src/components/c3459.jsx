import React from 'react';
const LABEL_3459 = 'component_3459';
export function Component3459({ value = 3459, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3459, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3459, 'data-value': derived.doubled }, children);
}
export default Component3459;
