import React from 'react';
const LABEL_12398 = 'component_12398';
export function Component12398({ value = 12398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12398, 'data-value': derived.doubled }, children);
}
export default Component12398;
