import React from 'react';
const LABEL_7623 = 'component_7623';
export function Component7623({ value = 7623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7623, 'data-value': derived.doubled }, children);
}
export default Component7623;
