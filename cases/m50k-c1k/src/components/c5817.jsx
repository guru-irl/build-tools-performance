import React from 'react';
const LABEL_5817 = 'component_5817';
export function Component5817({ value = 5817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5817, 'data-value': derived.doubled }, children);
}
export default Component5817;
