import React from 'react';
const LABEL_17141 = 'component_17141';
export function Component17141({ value = 17141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17141, 'data-value': derived.doubled }, children);
}
export default Component17141;
