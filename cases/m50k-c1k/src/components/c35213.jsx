import React from 'react';
const LABEL_35213 = 'component_35213';
export function Component35213({ value = 35213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35213, 'data-value': derived.doubled }, children);
}
export default Component35213;
