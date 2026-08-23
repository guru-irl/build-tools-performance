import React from 'react';
const LABEL_8150 = 'component_8150';
export function Component8150({ value = 8150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8150, 'data-value': derived.doubled }, children);
}
export default Component8150;
