import React from 'react';
const LABEL_15836 = 'component_15836';
export function Component15836({ value = 15836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15836, 'data-value': derived.doubled }, children);
}
export default Component15836;
