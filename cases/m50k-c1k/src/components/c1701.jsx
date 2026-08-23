import React from 'react';
const LABEL_1701 = 'component_1701';
export function Component1701({ value = 1701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1701, 'data-value': derived.doubled }, children);
}
export default Component1701;
