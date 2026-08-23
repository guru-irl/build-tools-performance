import React from 'react';
const LABEL_16542 = 'component_16542';
export function Component16542({ value = 16542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16542, 'data-value': derived.doubled }, children);
}
export default Component16542;
