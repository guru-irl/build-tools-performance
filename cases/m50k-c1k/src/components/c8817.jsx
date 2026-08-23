import React from 'react';
const LABEL_8817 = 'component_8817';
export function Component8817({ value = 8817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8817, 'data-value': derived.doubled }, children);
}
export default Component8817;
