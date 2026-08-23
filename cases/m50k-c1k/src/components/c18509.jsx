import React from 'react';
const LABEL_18509 = 'component_18509';
export function Component18509({ value = 18509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18509, 'data-value': derived.doubled }, children);
}
export default Component18509;
