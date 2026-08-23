import React from 'react';
const LABEL_38701 = 'component_38701';
export function Component38701({ value = 38701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38701, 'data-value': derived.doubled }, children);
}
export default Component38701;
