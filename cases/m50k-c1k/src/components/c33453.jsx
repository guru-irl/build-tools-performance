import React from 'react';
const LABEL_33453 = 'component_33453';
export function Component33453({ value = 33453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33453, 'data-value': derived.doubled }, children);
}
export default Component33453;
