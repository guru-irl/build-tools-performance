import React from 'react';
const LABEL_10787 = 'component_10787';
export function Component10787({ value = 10787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10787, 'data-value': derived.doubled }, children);
}
export default Component10787;
