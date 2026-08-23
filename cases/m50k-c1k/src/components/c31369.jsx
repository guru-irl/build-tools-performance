import React from 'react';
const LABEL_31369 = 'component_31369';
export function Component31369({ value = 31369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31369, 'data-value': derived.doubled }, children);
}
export default Component31369;
