import React from 'react';
const LABEL_32701 = 'component_32701';
export function Component32701({ value = 32701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32701, 'data-value': derived.doubled }, children);
}
export default Component32701;
