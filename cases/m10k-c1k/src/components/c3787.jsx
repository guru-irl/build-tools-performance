import React from 'react';
const LABEL_3787 = 'component_3787';
export function Component3787({ value = 3787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3787, 'data-value': derived.doubled }, children);
}
export default Component3787;
