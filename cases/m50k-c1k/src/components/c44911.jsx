import React from 'react';
const LABEL_44911 = 'component_44911';
export function Component44911({ value = 44911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44911, 'data-value': derived.doubled }, children);
}
export default Component44911;
