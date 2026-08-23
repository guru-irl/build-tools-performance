import React from 'react';
const LABEL_3150 = 'component_3150';
export function Component3150({ value = 3150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3150, 'data-value': derived.doubled }, children);
}
export default Component3150;
