import React from 'react';
const LABEL_36409 = 'component_36409';
export function Component36409({ value = 36409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36409, 'data-value': derived.doubled }, children);
}
export default Component36409;
