import React from 'react';
const LABEL_13623 = 'component_13623';
export function Component13623({ value = 13623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13623, 'data-value': derived.doubled }, children);
}
export default Component13623;
