import React from 'react';
const LABEL_10513 = 'component_10513';
export function Component10513({ value = 10513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10513, 'data-value': derived.doubled }, children);
}
export default Component10513;
