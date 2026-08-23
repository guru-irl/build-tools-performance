import React from 'react';
const LABEL_12817 = 'component_12817';
export function Component12817({ value = 12817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12817, 'data-value': derived.doubled }, children);
}
export default Component12817;
