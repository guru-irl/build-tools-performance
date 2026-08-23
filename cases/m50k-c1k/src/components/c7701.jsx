import React from 'react';
const LABEL_7701 = 'component_7701';
export function Component7701({ value = 7701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7701, 'data-value': derived.doubled }, children);
}
export default Component7701;
