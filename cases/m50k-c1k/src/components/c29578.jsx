import React from 'react';
const LABEL_29578 = 'component_29578';
export function Component29578({ value = 29578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29578, 'data-value': derived.doubled }, children);
}
export default Component29578;
