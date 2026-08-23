import React from 'react';
const LABEL_46354 = 'component_46354';
export function Component46354({ value = 46354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46354, 'data-value': derived.doubled }, children);
}
export default Component46354;
