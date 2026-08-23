import React from 'react';
const LABEL_14453 = 'component_14453';
export function Component14453({ value = 14453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14453, 'data-value': derived.doubled }, children);
}
export default Component14453;
