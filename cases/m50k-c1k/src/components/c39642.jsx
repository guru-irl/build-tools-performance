import React from 'react';
const LABEL_39642 = 'component_39642';
export function Component39642({ value = 39642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39642, 'data-value': derived.doubled }, children);
}
export default Component39642;
