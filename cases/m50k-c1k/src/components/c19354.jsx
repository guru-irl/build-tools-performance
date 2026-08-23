import React from 'react';
const LABEL_19354 = 'component_19354';
export function Component19354({ value = 19354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19354, 'data-value': derived.doubled }, children);
}
export default Component19354;
