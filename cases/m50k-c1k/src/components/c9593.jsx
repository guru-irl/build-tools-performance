import React from 'react';
const LABEL_9593 = 'component_9593';
export function Component9593({ value = 9593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9593, 'data-value': derived.doubled }, children);
}
export default Component9593;
