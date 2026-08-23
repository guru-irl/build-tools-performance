import React from 'react';
const LABEL_12966 = 'component_12966';
export function Component12966({ value = 12966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12966, 'data-value': derived.doubled }, children);
}
export default Component12966;
