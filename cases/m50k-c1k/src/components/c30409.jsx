import React from 'react';
const LABEL_30409 = 'component_30409';
export function Component30409({ value = 30409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30409, 'data-value': derived.doubled }, children);
}
export default Component30409;
