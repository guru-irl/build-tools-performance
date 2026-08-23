import React from 'react';
const LABEL_32109 = 'component_32109';
export function Component32109({ value = 32109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32109, 'data-value': derived.doubled }, children);
}
export default Component32109;
