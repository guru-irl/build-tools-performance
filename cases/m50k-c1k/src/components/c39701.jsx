import React from 'react';
const LABEL_39701 = 'component_39701';
export function Component39701({ value = 39701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39701, 'data-value': derived.doubled }, children);
}
export default Component39701;
