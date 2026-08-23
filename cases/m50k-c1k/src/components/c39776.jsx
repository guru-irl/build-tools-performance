import React from 'react';
const LABEL_39776 = 'component_39776';
export function Component39776({ value = 39776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39776, 'data-value': derived.doubled }, children);
}
export default Component39776;
