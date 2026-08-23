import React from 'react';
const LABEL_40701 = 'component_40701';
export function Component40701({ value = 40701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40701, 'data-value': derived.doubled }, children);
}
export default Component40701;
