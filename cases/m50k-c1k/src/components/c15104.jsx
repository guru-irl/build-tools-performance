import React from 'react';
const LABEL_15104 = 'component_15104';
export function Component15104({ value = 15104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15104, 'data-value': derived.doubled }, children);
}
export default Component15104;
