import React from 'react';
const LABEL_613 = 'component_613';
export function Component613({ value = 613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_613, 'data-value': derived.doubled }, children);
}
export default Component613;
