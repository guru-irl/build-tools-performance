import React from 'react';
const LABEL_21494 = 'component_21494';
export function Component21494({ value = 21494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21494, 'data-value': derived.doubled }, children);
}
export default Component21494;
