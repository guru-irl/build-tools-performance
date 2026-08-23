import React from 'react';
const LABEL_21751 = 'component_21751';
export function Component21751({ value = 21751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21751, 'data-value': derived.doubled }, children);
}
export default Component21751;
