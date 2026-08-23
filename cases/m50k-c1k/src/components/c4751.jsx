import React from 'react';
const LABEL_4751 = 'component_4751';
export function Component4751({ value = 4751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4751, 'data-value': derived.doubled }, children);
}
export default Component4751;
