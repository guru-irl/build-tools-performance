import React from 'react';
const LABEL_23701 = 'component_23701';
export function Component23701({ value = 23701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23701, 'data-value': derived.doubled }, children);
}
export default Component23701;
