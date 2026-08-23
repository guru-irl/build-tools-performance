import React from 'react';
const LABEL_12116 = 'component_12116';
export function Component12116({ value = 12116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12116, 'data-value': derived.doubled }, children);
}
export default Component12116;
