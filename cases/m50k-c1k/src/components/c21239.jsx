import React from 'react';
const LABEL_21239 = 'component_21239';
export function Component21239({ value = 21239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21239, 'data-value': derived.doubled }, children);
}
export default Component21239;
