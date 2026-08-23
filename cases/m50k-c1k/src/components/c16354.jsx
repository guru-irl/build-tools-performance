import React from 'react';
const LABEL_16354 = 'component_16354';
export function Component16354({ value = 16354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16354, 'data-value': derived.doubled }, children);
}
export default Component16354;
