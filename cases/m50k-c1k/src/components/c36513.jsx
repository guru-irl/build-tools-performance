import React from 'react';
const LABEL_36513 = 'component_36513';
export function Component36513({ value = 36513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36513, 'data-value': derived.doubled }, children);
}
export default Component36513;
