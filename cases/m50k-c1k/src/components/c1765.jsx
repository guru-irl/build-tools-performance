import React from 'react';
const LABEL_1765 = 'component_1765';
export function Component1765({ value = 1765, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1765, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1765, 'data-value': derived.doubled }, children);
}
export default Component1765;
