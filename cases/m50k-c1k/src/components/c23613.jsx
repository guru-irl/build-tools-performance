import React from 'react';
const LABEL_23613 = 'component_23613';
export function Component23613({ value = 23613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23613, 'data-value': derived.doubled }, children);
}
export default Component23613;
