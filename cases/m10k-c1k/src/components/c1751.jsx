import React from 'react';
const LABEL_1751 = 'component_1751';
export function Component1751({ value = 1751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1751, 'data-value': derived.doubled }, children);
}
export default Component1751;
