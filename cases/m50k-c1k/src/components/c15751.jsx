import React from 'react';
const LABEL_15751 = 'component_15751';
export function Component15751({ value = 15751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15751, 'data-value': derived.doubled }, children);
}
export default Component15751;
