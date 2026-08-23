import React from 'react';
const LABEL_9937 = 'component_9937';
export function Component9937({ value = 9937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9937, 'data-value': derived.doubled }, children);
}
export default Component9937;
