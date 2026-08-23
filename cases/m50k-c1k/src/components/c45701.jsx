import React from 'react';
const LABEL_45701 = 'component_45701';
export function Component45701({ value = 45701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45701, 'data-value': derived.doubled }, children);
}
export default Component45701;
