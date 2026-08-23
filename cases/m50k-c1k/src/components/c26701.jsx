import React from 'react';
const LABEL_26701 = 'component_26701';
export function Component26701({ value = 26701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26701, 'data-value': derived.doubled }, children);
}
export default Component26701;
