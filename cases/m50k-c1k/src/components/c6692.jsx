import React from 'react';
const LABEL_6692 = 'component_6692';
export function Component6692({ value = 6692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6692, 'data-value': derived.doubled }, children);
}
export default Component6692;
