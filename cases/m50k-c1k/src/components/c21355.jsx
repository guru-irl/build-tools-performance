import React from 'react';
const LABEL_21355 = 'component_21355';
export function Component21355({ value = 21355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21355, 'data-value': derived.doubled }, children);
}
export default Component21355;
