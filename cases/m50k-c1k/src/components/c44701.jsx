import React from 'react';
const LABEL_44701 = 'component_44701';
export function Component44701({ value = 44701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44701, 'data-value': derived.doubled }, children);
}
export default Component44701;
