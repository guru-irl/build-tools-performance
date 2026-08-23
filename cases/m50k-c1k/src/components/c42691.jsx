import React from 'react';
const LABEL_42691 = 'component_42691';
export function Component42691({ value = 42691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42691, 'data-value': derived.doubled }, children);
}
export default Component42691;
