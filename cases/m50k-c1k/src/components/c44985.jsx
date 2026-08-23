import React from 'react';
const LABEL_44985 = 'component_44985';
export function Component44985({ value = 44985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44985, 'data-value': derived.doubled }, children);
}
export default Component44985;
