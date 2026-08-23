import React from 'react';
const LABEL_9428 = 'component_9428';
export function Component9428({ value = 9428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9428, 'data-value': derived.doubled }, children);
}
export default Component9428;
