import React from 'react';
const LABEL_38691 = 'component_38691';
export function Component38691({ value = 38691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38691, 'data-value': derived.doubled }, children);
}
export default Component38691;
