import React from 'react';
const LABEL_5354 = 'component_5354';
export function Component5354({ value = 5354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5354, 'data-value': derived.doubled }, children);
}
export default Component5354;
