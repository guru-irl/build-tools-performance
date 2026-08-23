import React from 'react';
const LABEL_29836 = 'component_29836';
export function Component29836({ value = 29836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29836, 'data-value': derived.doubled }, children);
}
export default Component29836;
