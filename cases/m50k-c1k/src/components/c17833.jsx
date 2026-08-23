import React from 'react';
const LABEL_17833 = 'component_17833';
export function Component17833({ value = 17833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17833, 'data-value': derived.doubled }, children);
}
export default Component17833;
