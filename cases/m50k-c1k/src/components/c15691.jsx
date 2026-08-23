import React from 'react';
const LABEL_15691 = 'component_15691';
export function Component15691({ value = 15691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15691, 'data-value': derived.doubled }, children);
}
export default Component15691;
