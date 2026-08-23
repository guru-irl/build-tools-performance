import React from 'react';
const LABEL_35281 = 'component_35281';
export function Component35281({ value = 35281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35281, 'data-value': derived.doubled }, children);
}
export default Component35281;
