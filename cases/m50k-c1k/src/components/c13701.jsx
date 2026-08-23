import React from 'react';
const LABEL_13701 = 'component_13701';
export function Component13701({ value = 13701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13701, 'data-value': derived.doubled }, children);
}
export default Component13701;
