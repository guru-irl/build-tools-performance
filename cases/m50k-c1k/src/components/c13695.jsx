import React from 'react';
const LABEL_13695 = 'component_13695';
export function Component13695({ value = 13695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13695, 'data-value': derived.doubled }, children);
}
export default Component13695;
