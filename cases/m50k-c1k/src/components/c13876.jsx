import React from 'react';
const LABEL_13876 = 'component_13876';
export function Component13876({ value = 13876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13876, 'data-value': derived.doubled }, children);
}
export default Component13876;
