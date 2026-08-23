import React from 'react';
const LABEL_3354 = 'component_3354';
export function Component3354({ value = 3354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3354, 'data-value': derived.doubled }, children);
}
export default Component3354;
