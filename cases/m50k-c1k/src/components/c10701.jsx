import React from 'react';
const LABEL_10701 = 'component_10701';
export function Component10701({ value = 10701, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10701, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10701, 'data-value': derived.doubled }, children);
}
export default Component10701;
