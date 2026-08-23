import React from 'react';
const LABEL_29809 = 'component_29809';
export function Component29809({ value = 29809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29809, 'data-value': derived.doubled }, children);
}
export default Component29809;
