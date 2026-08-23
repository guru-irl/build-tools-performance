import React from 'react';
const LABEL_33777 = 'component_33777';
export function Component33777({ value = 33777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33777, 'data-value': derived.doubled }, children);
}
export default Component33777;
