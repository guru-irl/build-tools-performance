import React from 'react';
const LABEL_2354 = 'component_2354';
export function Component2354({ value = 2354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2354, 'data-value': derived.doubled }, children);
}
export default Component2354;
