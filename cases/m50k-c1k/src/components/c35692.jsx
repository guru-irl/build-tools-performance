import React from 'react';
const LABEL_35692 = 'component_35692';
export function Component35692({ value = 35692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35692, 'data-value': derived.doubled }, children);
}
export default Component35692;
