import React from 'react';
const LABEL_39329 = 'component_39329';
export function Component39329({ value = 39329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39329, 'data-value': derived.doubled }, children);
}
export default Component39329;
