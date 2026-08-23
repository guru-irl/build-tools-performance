import React from 'react';
const LABEL_38170 = 'component_38170';
export function Component38170({ value = 38170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38170, 'data-value': derived.doubled }, children);
}
export default Component38170;
