import React from 'react';
const LABEL_22692 = 'component_22692';
export function Component22692({ value = 22692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22692, 'data-value': derived.doubled }, children);
}
export default Component22692;
