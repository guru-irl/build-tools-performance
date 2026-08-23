import React from 'react';
const LABEL_21076 = 'component_21076';
export function Component21076({ value = 21076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21076, 'data-value': derived.doubled }, children);
}
export default Component21076;
