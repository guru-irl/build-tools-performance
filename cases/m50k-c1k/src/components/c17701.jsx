import React from 'react';
const LABEL_17701 = 'component_17701';
export function Component17701({ value = 17701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17701, 'data-value': derived.doubled }, children);
}
export default Component17701;
