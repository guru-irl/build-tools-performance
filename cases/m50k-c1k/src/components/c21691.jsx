import React from 'react';
const LABEL_21691 = 'component_21691';
export function Component21691({ value = 21691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21691, 'data-value': derived.doubled }, children);
}
export default Component21691;
