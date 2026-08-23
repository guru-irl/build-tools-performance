import React from 'react';
const LABEL_29606 = 'component_29606';
export function Component29606({ value = 29606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29606, 'data-value': derived.doubled }, children);
}
export default Component29606;
