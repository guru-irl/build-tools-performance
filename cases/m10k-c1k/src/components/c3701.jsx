import React from 'react';
const LABEL_3701 = 'component_3701';
export function Component3701({ value = 3701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3701, 'data-value': derived.doubled }, children);
}
export default Component3701;
