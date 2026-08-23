import React from 'react';
const LABEL_9916 = 'component_9916';
export function Component9916({ value = 9916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9916, 'data-value': derived.doubled }, children);
}
export default Component9916;
