import React from 'react';
const LABEL_16701 = 'component_16701';
export function Component16701({ value = 16701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16701, 'data-value': derived.doubled }, children);
}
export default Component16701;
