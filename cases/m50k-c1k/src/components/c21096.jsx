import React from 'react';
const LABEL_21096 = 'component_21096';
export function Component21096({ value = 21096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21096, 'data-value': derived.doubled }, children);
}
export default Component21096;
