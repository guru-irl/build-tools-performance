import React from 'react';
const LABEL_21453 = 'component_21453';
export function Component21453({ value = 21453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21453, 'data-value': derived.doubled }, children);
}
export default Component21453;
