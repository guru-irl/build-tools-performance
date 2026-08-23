import React from 'react';
const LABEL_21326 = 'component_21326';
export function Component21326({ value = 21326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21326, 'data-value': derived.doubled }, children);
}
export default Component21326;
