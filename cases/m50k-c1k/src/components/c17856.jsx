import React from 'react';
const LABEL_17856 = 'component_17856';
export function Component17856({ value = 17856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17856, 'data-value': derived.doubled }, children);
}
export default Component17856;
