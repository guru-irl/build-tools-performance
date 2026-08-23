import React from 'react';
const LABEL_701 = 'component_701';
export function Component701({ value = 701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_701, 'data-value': derived.doubled }, children);
}
export default Component701;
