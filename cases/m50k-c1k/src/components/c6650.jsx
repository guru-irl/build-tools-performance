import React from 'react';
const LABEL_6650 = 'component_6650';
export function Component6650({ value = 6650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6650, 'data-value': derived.doubled }, children);
}
export default Component6650;
