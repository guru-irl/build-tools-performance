import React from 'react';
const LABEL_21249 = 'component_21249';
export function Component21249({ value = 21249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21249, 'data-value': derived.doubled }, children);
}
export default Component21249;
