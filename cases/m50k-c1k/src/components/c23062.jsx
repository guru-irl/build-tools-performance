import React from 'react';
const LABEL_23062 = 'component_23062';
export function Component23062({ value = 23062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23062, 'data-value': derived.doubled }, children);
}
export default Component23062;
