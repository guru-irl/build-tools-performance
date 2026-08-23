import React from 'react';
const LABEL_13751 = 'component_13751';
export function Component13751({ value = 13751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13751, 'data-value': derived.doubled }, children);
}
export default Component13751;
