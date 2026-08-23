import React from 'react';
const LABEL_12701 = 'component_12701';
export function Component12701({ value = 12701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12701, 'data-value': derived.doubled }, children);
}
export default Component12701;
