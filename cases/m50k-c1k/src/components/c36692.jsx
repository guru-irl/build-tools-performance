import React from 'react';
const LABEL_36692 = 'component_36692';
export function Component36692({ value = 36692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36692, 'data-value': derived.doubled }, children);
}
export default Component36692;
