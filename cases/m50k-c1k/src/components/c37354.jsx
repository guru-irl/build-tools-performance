import React from 'react';
const LABEL_37354 = 'component_37354';
export function Component37354({ value = 37354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37354, 'data-value': derived.doubled }, children);
}
export default Component37354;
