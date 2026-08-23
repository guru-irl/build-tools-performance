import React from 'react';
const LABEL_9613 = 'component_9613';
export function Component9613({ value = 9613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9613, 'data-value': derived.doubled }, children);
}
export default Component9613;
