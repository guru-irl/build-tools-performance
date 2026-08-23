import React from 'react';
const LABEL_22701 = 'component_22701';
export function Component22701({ value = 22701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22701, 'data-value': derived.doubled }, children);
}
export default Component22701;
