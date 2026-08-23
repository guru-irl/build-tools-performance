import React from 'react';
const LABEL_1623 = 'component_1623';
export function Component1623({ value = 1623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1623, 'data-value': derived.doubled }, children);
}
export default Component1623;
