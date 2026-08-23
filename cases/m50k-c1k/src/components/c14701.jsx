import React from 'react';
const LABEL_14701 = 'component_14701';
export function Component14701({ value = 14701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14701, 'data-value': derived.doubled }, children);
}
export default Component14701;
