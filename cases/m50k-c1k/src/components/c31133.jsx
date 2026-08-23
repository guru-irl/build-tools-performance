import React from 'react';
const LABEL_31133 = 'component_31133';
export function Component31133({ value = 31133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31133, 'data-value': derived.doubled }, children);
}
export default Component31133;
