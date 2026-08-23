import React from 'react';
const LABEL_23692 = 'component_23692';
export function Component23692({ value = 23692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23692, 'data-value': derived.doubled }, children);
}
export default Component23692;
