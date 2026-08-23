import React from 'react';
const LABEL_12396 = 'component_12396';
export function Component12396({ value = 12396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12396, 'data-value': derived.doubled }, children);
}
export default Component12396;
