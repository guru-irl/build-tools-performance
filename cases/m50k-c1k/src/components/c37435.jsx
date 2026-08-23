import React from 'react';
const LABEL_37435 = 'component_37435';
export function Component37435({ value = 37435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37435, 'data-value': derived.doubled }, children);
}
export default Component37435;
