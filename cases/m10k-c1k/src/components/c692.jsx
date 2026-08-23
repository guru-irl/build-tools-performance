import React from 'react';
const LABEL_692 = 'component_692';
export function Component692({ value = 692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_692, 'data-value': derived.doubled }, children);
}
export default Component692;
