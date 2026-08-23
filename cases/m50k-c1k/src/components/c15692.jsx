import React from 'react';
const LABEL_15692 = 'component_15692';
export function Component15692({ value = 15692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15692, 'data-value': derived.doubled }, children);
}
export default Component15692;
