import React from 'react';
const LABEL_31272 = 'component_31272';
export function Component31272({ value = 31272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31272, 'data-value': derived.doubled }, children);
}
export default Component31272;
