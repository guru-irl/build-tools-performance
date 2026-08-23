import React from 'react';
const LABEL_9680 = 'component_9680';
export function Component9680({ value = 9680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9680, 'data-value': derived.doubled }, children);
}
export default Component9680;
