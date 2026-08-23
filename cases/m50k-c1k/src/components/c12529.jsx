import React from 'react';
const LABEL_12529 = 'component_12529';
export function Component12529({ value = 12529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12529, 'data-value': derived.doubled }, children);
}
export default Component12529;
