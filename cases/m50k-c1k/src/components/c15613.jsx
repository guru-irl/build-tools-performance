import React from 'react';
const LABEL_15613 = 'component_15613';
export function Component15613({ value = 15613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15613, 'data-value': derived.doubled }, children);
}
export default Component15613;
