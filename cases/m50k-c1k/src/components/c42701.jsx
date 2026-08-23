import React from 'react';
const LABEL_42701 = 'component_42701';
export function Component42701({ value = 42701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42701, 'data-value': derived.doubled }, children);
}
export default Component42701;
