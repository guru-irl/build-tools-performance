import React from 'react';
const LABEL_8967 = 'component_8967';
export function Component8967({ value = 8967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8967, 'data-value': derived.doubled }, children);
}
export default Component8967;
