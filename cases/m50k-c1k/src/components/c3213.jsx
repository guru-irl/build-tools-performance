import React from 'react';
const LABEL_3213 = 'component_3213';
export function Component3213({ value = 3213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3213, 'data-value': derived.doubled }, children);
}
export default Component3213;
