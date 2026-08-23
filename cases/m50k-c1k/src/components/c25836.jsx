import React from 'react';
const LABEL_25836 = 'component_25836';
export function Component25836({ value = 25836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25836, 'data-value': derived.doubled }, children);
}
export default Component25836;
