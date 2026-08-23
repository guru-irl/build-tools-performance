import React from 'react';
const LABEL_30701 = 'component_30701';
export function Component30701({ value = 30701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30701, 'data-value': derived.doubled }, children);
}
export default Component30701;
