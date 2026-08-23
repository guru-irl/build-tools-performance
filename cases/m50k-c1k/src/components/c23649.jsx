import React from 'react';
const LABEL_23649 = 'component_23649';
export function Component23649({ value = 23649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23649, 'data-value': derived.doubled }, children);
}
export default Component23649;
