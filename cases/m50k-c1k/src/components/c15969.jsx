import React from 'react';
const LABEL_15969 = 'component_15969';
export function Component15969({ value = 15969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15969, 'data-value': derived.doubled }, children);
}
export default Component15969;
