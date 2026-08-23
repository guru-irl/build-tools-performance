import React from 'react';
const LABEL_44787 = 'component_44787';
export function Component44787({ value = 44787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44787, 'data-value': derived.doubled }, children);
}
export default Component44787;
