import React from 'react';
const LABEL_15175 = 'component_15175';
export function Component15175({ value = 15175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15175, 'data-value': derived.doubled }, children);
}
export default Component15175;
