import React from 'react';
const LABEL_15620 = 'component_15620';
export function Component15620({ value = 15620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15620, 'data-value': derived.doubled }, children);
}
export default Component15620;
