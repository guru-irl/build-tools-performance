import React from 'react';
const LABEL_36787 = 'component_36787';
export function Component36787({ value = 36787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36787, 'data-value': derived.doubled }, children);
}
export default Component36787;
