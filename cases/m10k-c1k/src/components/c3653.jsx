import React from 'react';
const LABEL_3653 = 'component_3653';
export function Component3653({ value = 3653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3653, 'data-value': derived.doubled }, children);
}
export default Component3653;
