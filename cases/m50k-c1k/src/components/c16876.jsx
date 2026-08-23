import React from 'react';
const LABEL_16876 = 'component_16876';
export function Component16876({ value = 16876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16876, 'data-value': derived.doubled }, children);
}
export default Component16876;
