import React from 'react';
const LABEL_35496 = 'component_35496';
export function Component35496({ value = 35496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35496, 'data-value': derived.doubled }, children);
}
export default Component35496;
