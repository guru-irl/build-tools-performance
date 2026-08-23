import React from 'react';
const LABEL_23911 = 'component_23911';
export function Component23911({ value = 23911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23911, 'data-value': derived.doubled }, children);
}
export default Component23911;
