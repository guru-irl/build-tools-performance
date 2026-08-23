import React from 'react';
const LABEL_25701 = 'component_25701';
export function Component25701({ value = 25701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25701, 'data-value': derived.doubled }, children);
}
export default Component25701;
