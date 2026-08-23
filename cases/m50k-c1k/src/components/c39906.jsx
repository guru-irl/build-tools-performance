import React from 'react';
const LABEL_39906 = 'component_39906';
export function Component39906({ value = 39906, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39906, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39906, 'data-value': derived.doubled }, children);
}
export default Component39906;
