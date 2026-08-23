import React from 'react';
const LABEL_8509 = 'component_8509';
export function Component8509({ value = 8509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8509, 'data-value': derived.doubled }, children);
}
export default Component8509;
