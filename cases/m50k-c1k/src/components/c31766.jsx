import React from 'react';
const LABEL_31766 = 'component_31766';
export function Component31766({ value = 31766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31766, 'data-value': derived.doubled }, children);
}
export default Component31766;
