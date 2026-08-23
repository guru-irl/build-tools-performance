import React from 'react';
const LABEL_31787 = 'component_31787';
export function Component31787({ value = 31787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31787, 'data-value': derived.doubled }, children);
}
export default Component31787;
