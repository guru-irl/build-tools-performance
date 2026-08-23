import React from 'react';
const LABEL_37513 = 'component_37513';
export function Component37513({ value = 37513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37513, 'data-value': derived.doubled }, children);
}
export default Component37513;
