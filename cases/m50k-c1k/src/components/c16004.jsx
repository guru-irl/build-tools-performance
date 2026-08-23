import React from 'react';
const LABEL_16004 = 'component_16004';
export function Component16004({ value = 16004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16004, 'data-value': derived.doubled }, children);
}
export default Component16004;
