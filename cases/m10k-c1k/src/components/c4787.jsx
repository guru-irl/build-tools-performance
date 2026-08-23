import React from 'react';
const LABEL_4787 = 'component_4787';
export function Component4787({ value = 4787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4787, 'data-value': derived.doubled }, children);
}
export default Component4787;
