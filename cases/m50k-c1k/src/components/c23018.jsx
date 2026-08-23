import React from 'react';
const LABEL_23018 = 'component_23018';
export function Component23018({ value = 23018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23018, 'data-value': derived.doubled }, children);
}
export default Component23018;
