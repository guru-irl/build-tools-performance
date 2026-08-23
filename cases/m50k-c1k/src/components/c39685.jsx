import React from 'react';
const LABEL_39685 = 'component_39685';
export function Component39685({ value = 39685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39685, 'data-value': derived.doubled }, children);
}
export default Component39685;
