import React from 'react';
const LABEL_35701 = 'component_35701';
export function Component35701({ value = 35701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35701, 'data-value': derived.doubled }, children);
}
export default Component35701;
