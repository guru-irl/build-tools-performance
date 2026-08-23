import React from 'react';
const LABEL_12272 = 'component_12272';
export function Component12272({ value = 12272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12272, 'data-value': derived.doubled }, children);
}
export default Component12272;
