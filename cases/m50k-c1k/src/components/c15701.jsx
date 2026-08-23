import React from 'react';
const LABEL_15701 = 'component_15701';
export function Component15701({ value = 15701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15701, 'data-value': derived.doubled }, children);
}
export default Component15701;
