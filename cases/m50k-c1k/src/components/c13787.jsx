import React from 'react';
const LABEL_13787 = 'component_13787';
export function Component13787({ value = 13787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13787, 'data-value': derived.doubled }, children);
}
export default Component13787;
