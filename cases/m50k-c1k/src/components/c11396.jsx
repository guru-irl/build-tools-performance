import React from 'react';
const LABEL_11396 = 'component_11396';
export function Component11396({ value = 11396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11396, 'data-value': derived.doubled }, children);
}
export default Component11396;
