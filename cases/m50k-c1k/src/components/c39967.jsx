import React from 'react';
const LABEL_39967 = 'component_39967';
export function Component39967({ value = 39967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39967, 'data-value': derived.doubled }, children);
}
export default Component39967;
