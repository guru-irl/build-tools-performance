import React from 'react';
const LABEL_25333 = 'component_25333';
export function Component25333({ value = 25333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25333, 'data-value': derived.doubled }, children);
}
export default Component25333;
