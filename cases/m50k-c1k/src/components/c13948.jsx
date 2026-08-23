import React from 'react';
const LABEL_13948 = 'component_13948';
export function Component13948({ value = 13948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13948, 'data-value': derived.doubled }, children);
}
export default Component13948;
