import React from 'react';
const LABEL_17137 = 'component_17137';
export function Component17137({ value = 17137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17137, 'data-value': derived.doubled }, children);
}
export default Component17137;
