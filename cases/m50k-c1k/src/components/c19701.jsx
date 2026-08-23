import React from 'react';
const LABEL_19701 = 'component_19701';
export function Component19701({ value = 19701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19701, 'data-value': derived.doubled }, children);
}
export default Component19701;
