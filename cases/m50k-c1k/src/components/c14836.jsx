import React from 'react';
const LABEL_14836 = 'component_14836';
export function Component14836({ value = 14836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14836, 'data-value': derived.doubled }, children);
}
export default Component14836;
