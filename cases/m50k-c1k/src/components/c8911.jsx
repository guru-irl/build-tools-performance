import React from 'react';
const LABEL_8911 = 'component_8911';
export function Component8911({ value = 8911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8911, 'data-value': derived.doubled }, children);
}
export default Component8911;
