import React from 'react';
const LABEL_44208 = 'component_44208';
export function Component44208({ value = 44208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44208, 'data-value': derived.doubled }, children);
}
export default Component44208;
