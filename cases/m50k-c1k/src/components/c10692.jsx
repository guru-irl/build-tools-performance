import React from 'react';
const LABEL_10692 = 'component_10692';
export function Component10692({ value = 10692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10692, 'data-value': derived.doubled }, children);
}
export default Component10692;
