import React from 'react';
const LABEL_41701 = 'component_41701';
export function Component41701({ value = 41701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41701, 'data-value': derived.doubled }, children);
}
export default Component41701;
