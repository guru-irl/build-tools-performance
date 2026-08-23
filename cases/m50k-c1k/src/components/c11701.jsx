import React from 'react';
const LABEL_11701 = 'component_11701';
export function Component11701({ value = 11701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11701, 'data-value': derived.doubled }, children);
}
export default Component11701;
