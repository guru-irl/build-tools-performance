import React from 'react';
const LABEL_32692 = 'component_32692';
export function Component32692({ value = 32692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32692, 'data-value': derived.doubled }, children);
}
export default Component32692;
