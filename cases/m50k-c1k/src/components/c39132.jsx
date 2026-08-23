import React from 'react';
const LABEL_39132 = 'component_39132';
export function Component39132({ value = 39132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39132, 'data-value': derived.doubled }, children);
}
export default Component39132;
