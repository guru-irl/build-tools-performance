import React from 'react';
const LABEL_21701 = 'component_21701';
export function Component21701({ value = 21701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21701, 'data-value': derived.doubled }, children);
}
export default Component21701;
