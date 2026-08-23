import React from 'react';
const LABEL_31148 = 'component_31148';
export function Component31148({ value = 31148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31148, 'data-value': derived.doubled }, children);
}
export default Component31148;
