import React from 'react';
const LABEL_28751 = 'component_28751';
export function Component28751({ value = 28751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28751, 'data-value': derived.doubled }, children);
}
export default Component28751;
