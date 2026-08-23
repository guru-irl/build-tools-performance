import React from 'react';
const LABEL_33649 = 'component_33649';
export function Component33649({ value = 33649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33649, 'data-value': derived.doubled }, children);
}
export default Component33649;
