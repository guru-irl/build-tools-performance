import React from 'react';
const LABEL_21583 = 'component_21583';
export function Component21583({ value = 21583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21583, 'data-value': derived.doubled }, children);
}
export default Component21583;
