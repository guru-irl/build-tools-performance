import React from 'react';
const LABEL_7113 = 'component_7113';
export function Component7113({ value = 7113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7113, 'data-value': derived.doubled }, children);
}
export default Component7113;
