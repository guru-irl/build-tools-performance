import React from 'react';
const LABEL_13836 = 'component_13836';
export function Component13836({ value = 13836, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13836, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13836, 'data-value': derived.doubled }, children);
}
export default Component13836;
