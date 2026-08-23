import React from 'react';
const LABEL_39709 = 'component_39709';
export function Component39709({ value = 39709, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39709, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39709, 'data-value': derived.doubled }, children);
}
export default Component39709;
