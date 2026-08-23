import React from 'react';
const LABEL_3691 = 'component_3691';
export function Component3691({ value = 3691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3691, 'data-value': derived.doubled }, children);
}
export default Component3691;
