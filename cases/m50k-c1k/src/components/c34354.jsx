import React from 'react';
const LABEL_34354 = 'component_34354';
export function Component34354({ value = 34354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34354, 'data-value': derived.doubled }, children);
}
export default Component34354;
