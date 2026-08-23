import React from 'react';
const LABEL_26354 = 'component_26354';
export function Component26354({ value = 26354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26354, 'data-value': derived.doubled }, children);
}
export default Component26354;
