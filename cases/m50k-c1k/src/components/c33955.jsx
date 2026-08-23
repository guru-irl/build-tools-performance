import React from 'react';
const LABEL_33955 = 'component_33955';
export function Component33955({ value = 33955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33955, 'data-value': derived.doubled }, children);
}
export default Component33955;
