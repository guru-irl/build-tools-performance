import React from 'react';
const LABEL_23691 = 'component_23691';
export function Component23691({ value = 23691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23691, 'data-value': derived.doubled }, children);
}
export default Component23691;
