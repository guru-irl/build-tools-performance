import React from 'react';
const LABEL_14751 = 'component_14751';
export function Component14751({ value = 14751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14751, 'data-value': derived.doubled }, children);
}
export default Component14751;
