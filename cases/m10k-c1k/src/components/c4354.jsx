import React from 'react';
const LABEL_4354 = 'component_4354';
export function Component4354({ value = 4354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4354, 'data-value': derived.doubled }, children);
}
export default Component4354;
