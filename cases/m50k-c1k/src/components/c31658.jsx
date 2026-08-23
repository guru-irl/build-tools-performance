import React from 'react';
const LABEL_31658 = 'component_31658';
export function Component31658({ value = 31658, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31658, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31658, 'data-value': derived.doubled }, children);
}
export default Component31658;
