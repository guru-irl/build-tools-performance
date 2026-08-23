import React from 'react';
const LABEL_39160 = 'component_39160';
export function Component39160({ value = 39160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39160, 'data-value': derived.doubled }, children);
}
export default Component39160;
