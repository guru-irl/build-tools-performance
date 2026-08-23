import React from 'react';
const LABEL_16496 = 'component_16496';
export function Component16496({ value = 16496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16496, 'data-value': derived.doubled }, children);
}
export default Component16496;
