import React from 'react';
const LABEL_9204 = 'component_9204';
export function Component9204({ value = 9204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9204, 'data-value': derived.doubled }, children);
}
export default Component9204;
