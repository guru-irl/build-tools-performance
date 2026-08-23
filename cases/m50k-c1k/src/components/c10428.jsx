import React from 'react';
const LABEL_10428 = 'component_10428';
export function Component10428({ value = 10428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10428, 'data-value': derived.doubled }, children);
}
export default Component10428;
