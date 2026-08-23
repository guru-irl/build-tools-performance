import React from 'react';
const LABEL_21561 = 'component_21561';
export function Component21561({ value = 21561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21561, 'data-value': derived.doubled }, children);
}
export default Component21561;
