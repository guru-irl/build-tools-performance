import React from 'react';
const LABEL_23222 = 'component_23222';
export function Component23222({ value = 23222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23222, 'data-value': derived.doubled }, children);
}
export default Component23222;
