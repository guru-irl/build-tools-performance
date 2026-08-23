import React from 'react';
const LABEL_30697 = 'component_30697';
export function Component30697({ value = 30697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30697, 'data-value': derived.doubled }, children);
}
export default Component30697;
