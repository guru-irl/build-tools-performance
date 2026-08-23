import React from 'react';
const LABEL_19692 = 'component_19692';
export function Component19692({ value = 19692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19692, 'data-value': derived.doubled }, children);
}
export default Component19692;
