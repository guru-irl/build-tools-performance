import React from 'react';
const LABEL_16787 = 'component_16787';
export function Component16787({ value = 16787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16787, 'data-value': derived.doubled }, children);
}
export default Component16787;
