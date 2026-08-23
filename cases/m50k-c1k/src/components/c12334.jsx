import React from 'react';
const LABEL_12334 = 'component_12334';
export function Component12334({ value = 12334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12334, 'data-value': derived.doubled }, children);
}
export default Component12334;
