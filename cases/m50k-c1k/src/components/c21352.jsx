import React from 'react';
const LABEL_21352 = 'component_21352';
export function Component21352({ value = 21352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21352, 'data-value': derived.doubled }, children);
}
export default Component21352;
