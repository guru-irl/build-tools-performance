import React from 'react';
const LABEL_21018 = 'component_21018';
export function Component21018({ value = 21018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21018, 'data-value': derived.doubled }, children);
}
export default Component21018;
