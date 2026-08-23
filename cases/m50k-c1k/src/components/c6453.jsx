import React from 'react';
const LABEL_6453 = 'component_6453';
export function Component6453({ value = 6453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6453, 'data-value': derived.doubled }, children);
}
export default Component6453;
