import React from 'react';
const LABEL_36701 = 'component_36701';
export function Component36701({ value = 36701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36701, 'data-value': derived.doubled }, children);
}
export default Component36701;
