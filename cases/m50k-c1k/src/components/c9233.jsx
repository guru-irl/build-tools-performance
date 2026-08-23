import React from 'react';
const LABEL_9233 = 'component_9233';
export function Component9233({ value = 9233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9233, 'data-value': derived.doubled }, children);
}
export default Component9233;
