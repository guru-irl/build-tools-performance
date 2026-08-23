import React from 'react';
const LABEL_20701 = 'component_20701';
export function Component20701({ value = 20701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20701, 'data-value': derived.doubled }, children);
}
export default Component20701;
