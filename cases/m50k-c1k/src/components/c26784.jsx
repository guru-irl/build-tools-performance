import React from 'react';
const LABEL_26784 = 'component_26784';
export function Component26784({ value = 26784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26784, 'data-value': derived.doubled }, children);
}
export default Component26784;
