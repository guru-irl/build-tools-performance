import React from 'react';
const LABEL_42478 = 'component_42478';
export function Component42478({ value = 42478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42478, 'data-value': derived.doubled }, children);
}
export default Component42478;
