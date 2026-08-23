import React from 'react';
const LABEL_17110 = 'component_17110';
export function Component17110({ value = 17110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17110, 'data-value': derived.doubled }, children);
}
export default Component17110;
