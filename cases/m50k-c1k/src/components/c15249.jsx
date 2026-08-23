import React from 'react';
const LABEL_15249 = 'component_15249';
export function Component15249({ value = 15249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15249, 'data-value': derived.doubled }, children);
}
export default Component15249;
