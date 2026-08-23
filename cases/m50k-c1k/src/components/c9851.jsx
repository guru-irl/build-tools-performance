import React from 'react';
const LABEL_9851 = 'component_9851';
export function Component9851({ value = 9851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9851, 'data-value': derived.doubled }, children);
}
export default Component9851;
