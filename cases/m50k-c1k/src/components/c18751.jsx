import React from 'react';
const LABEL_18751 = 'component_18751';
export function Component18751({ value = 18751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18751, 'data-value': derived.doubled }, children);
}
export default Component18751;
