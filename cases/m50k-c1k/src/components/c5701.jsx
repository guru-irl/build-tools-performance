import React from 'react';
const LABEL_5701 = 'component_5701';
export function Component5701({ value = 5701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5701, 'data-value': derived.doubled }, children);
}
export default Component5701;
