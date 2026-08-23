import React from 'react';
const LABEL_28701 = 'component_28701';
export function Component28701({ value = 28701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28701, 'data-value': derived.doubled }, children);
}
export default Component28701;
