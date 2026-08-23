import React from 'react';
const LABEL_21123 = 'component_21123';
export function Component21123({ value = 21123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21123, 'data-value': derived.doubled }, children);
}
export default Component21123;
