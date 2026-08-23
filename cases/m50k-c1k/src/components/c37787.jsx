import React from 'react';
const LABEL_37787 = 'component_37787';
export function Component37787({ value = 37787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37787, 'data-value': derived.doubled }, children);
}
export default Component37787;
