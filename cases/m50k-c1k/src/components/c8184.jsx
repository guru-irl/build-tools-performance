import React from 'react';
const LABEL_8184 = 'component_8184';
export function Component8184({ value = 8184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8184, 'data-value': derived.doubled }, children);
}
export default Component8184;
