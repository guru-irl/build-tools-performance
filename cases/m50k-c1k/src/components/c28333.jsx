import React from 'react';
const LABEL_28333 = 'component_28333';
export function Component28333({ value = 28333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28333, 'data-value': derived.doubled }, children);
}
export default Component28333;
