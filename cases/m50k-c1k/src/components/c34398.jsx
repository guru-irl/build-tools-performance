import React from 'react';
const LABEL_34398 = 'component_34398';
export function Component34398({ value = 34398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34398, 'data-value': derived.doubled }, children);
}
export default Component34398;
