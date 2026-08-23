import React from 'react';
const LABEL_39326 = 'component_39326';
export function Component39326({ value = 39326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39326, 'data-value': derived.doubled }, children);
}
export default Component39326;
