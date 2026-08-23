import React from 'react';
const LABEL_31333 = 'component_31333';
export function Component31333({ value = 31333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31333, 'data-value': derived.doubled }, children);
}
export default Component31333;
