import React from 'react';
const LABEL_1715 = 'component_1715';
export function Component1715({ value = 1715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1715, 'data-value': derived.doubled }, children);
}
export default Component1715;
