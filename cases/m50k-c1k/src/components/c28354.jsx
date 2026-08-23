import React from 'react';
const LABEL_28354 = 'component_28354';
export function Component28354({ value = 28354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28354, 'data-value': derived.doubled }, children);
}
export default Component28354;
