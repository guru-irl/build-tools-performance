import React from 'react';
const LABEL_29102 = 'component_29102';
export function Component29102({ value = 29102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29102, 'data-value': derived.doubled }, children);
}
export default Component29102;
