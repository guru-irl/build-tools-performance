import React from 'react';
const LABEL_39355 = 'component_39355';
export function Component39355({ value = 39355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39355, 'data-value': derived.doubled }, children);
}
export default Component39355;
