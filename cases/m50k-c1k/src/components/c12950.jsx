import React from 'react';
const LABEL_12950 = 'component_12950';
export function Component12950({ value = 12950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12950, 'data-value': derived.doubled }, children);
}
export default Component12950;
