import React from 'react';
const LABEL_31503 = 'component_31503';
export function Component31503({ value = 31503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31503, 'data-value': derived.doubled }, children);
}
export default Component31503;
