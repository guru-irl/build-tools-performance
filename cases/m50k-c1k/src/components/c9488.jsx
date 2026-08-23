import React from 'react';
const LABEL_9488 = 'component_9488';
export function Component9488({ value = 9488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9488, 'data-value': derived.doubled }, children);
}
export default Component9488;
