import React from 'react';
const LABEL_15968 = 'component_15968';
export function Component15968({ value = 15968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15968, 'data-value': derived.doubled }, children);
}
export default Component15968;
