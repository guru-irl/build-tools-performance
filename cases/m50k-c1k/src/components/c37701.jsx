import React from 'react';
const LABEL_37701 = 'component_37701';
export function Component37701({ value = 37701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37701, 'data-value': derived.doubled }, children);
}
export default Component37701;
