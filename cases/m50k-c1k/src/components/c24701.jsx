import React from 'react';
const LABEL_24701 = 'component_24701';
export function Component24701({ value = 24701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24701, 'data-value': derived.doubled }, children);
}
export default Component24701;
