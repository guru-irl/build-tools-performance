import React from 'react';
const LABEL_15510 = 'component_15510';
export function Component15510({ value = 15510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15510, 'data-value': derived.doubled }, children);
}
export default Component15510;
