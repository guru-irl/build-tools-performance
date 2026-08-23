import React from 'react';
const LABEL_29701 = 'component_29701';
export function Component29701({ value = 29701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29701, 'data-value': derived.doubled }, children);
}
export default Component29701;
