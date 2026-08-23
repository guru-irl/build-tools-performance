import React from 'react';
const LABEL_31354 = 'component_31354';
export function Component31354({ value = 31354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31354, 'data-value': derived.doubled }, children);
}
export default Component31354;
