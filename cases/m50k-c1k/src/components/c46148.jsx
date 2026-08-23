import React from 'react';
const LABEL_46148 = 'component_46148';
export function Component46148({ value = 46148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46148, 'data-value': derived.doubled }, children);
}
export default Component46148;
