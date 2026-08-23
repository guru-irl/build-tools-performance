import React from 'react';
const LABEL_9311 = 'component_9311';
export function Component9311({ value = 9311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9311, 'data-value': derived.doubled }, children);
}
export default Component9311;
