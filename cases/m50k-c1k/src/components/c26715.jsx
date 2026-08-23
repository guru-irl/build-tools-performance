import React from 'react';
const LABEL_26715 = 'component_26715';
export function Component26715({ value = 26715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26715, 'data-value': derived.doubled }, children);
}
export default Component26715;
