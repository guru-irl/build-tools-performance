import React from 'react';
const LABEL_17468 = 'component_17468';
export function Component17468({ value = 17468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17468, 'data-value': derived.doubled }, children);
}
export default Component17468;
