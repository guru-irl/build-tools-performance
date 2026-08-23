import React from 'react';
const LABEL_21092 = 'component_21092';
export function Component21092({ value = 21092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21092, 'data-value': derived.doubled }, children);
}
export default Component21092;
