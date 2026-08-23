import React from 'react';
const LABEL_34509 = 'component_34509';
export function Component34509({ value = 34509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34509, 'data-value': derived.doubled }, children);
}
export default Component34509;
