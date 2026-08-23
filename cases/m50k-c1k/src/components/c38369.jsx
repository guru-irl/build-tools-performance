import React from 'react';
const LABEL_38369 = 'component_38369';
export function Component38369({ value = 38369, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38369, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38369, 'data-value': derived.doubled }, children);
}
export default Component38369;
