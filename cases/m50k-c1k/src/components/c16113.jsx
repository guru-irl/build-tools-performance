import React from 'react';
const LABEL_16113 = 'component_16113';
export function Component16113({ value = 16113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16113, 'data-value': derived.doubled }, children);
}
export default Component16113;
