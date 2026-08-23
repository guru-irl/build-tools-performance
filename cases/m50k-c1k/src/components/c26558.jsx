import React from 'react';
const LABEL_26558 = 'component_26558';
export function Component26558({ value = 26558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26558, 'data-value': derived.doubled }, children);
}
export default Component26558;
