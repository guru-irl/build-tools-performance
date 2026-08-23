import React from 'react';
const LABEL_17352 = 'component_17352';
export function Component17352({ value = 17352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17352, 'data-value': derived.doubled }, children);
}
export default Component17352;
