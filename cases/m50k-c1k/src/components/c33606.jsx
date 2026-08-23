import React from 'react';
const LABEL_33606 = 'component_33606';
export function Component33606({ value = 33606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33606, 'data-value': derived.doubled }, children);
}
export default Component33606;
