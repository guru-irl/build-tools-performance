import React from 'react';
const LABEL_18701 = 'component_18701';
export function Component18701({ value = 18701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18701, 'data-value': derived.doubled }, children);
}
export default Component18701;
