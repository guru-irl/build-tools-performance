import React from 'react';
const LABEL_21162 = 'component_21162';
export function Component21162({ value = 21162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21162, 'data-value': derived.doubled }, children);
}
export default Component21162;
