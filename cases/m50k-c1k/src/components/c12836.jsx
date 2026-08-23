import React from 'react';
const LABEL_12836 = 'component_12836';
export function Component12836({ value = 12836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12836, 'data-value': derived.doubled }, children);
}
export default Component12836;
