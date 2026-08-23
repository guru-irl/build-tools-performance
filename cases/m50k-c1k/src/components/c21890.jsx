import React from 'react';
const LABEL_21890 = 'component_21890';
export function Component21890({ value = 21890, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21890, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21890, 'data-value': derived.doubled }, children);
}
export default Component21890;
