import React from 'react';
const LABEL_9272 = 'component_9272';
export function Component9272({ value = 9272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9272, 'data-value': derived.doubled }, children);
}
export default Component9272;
