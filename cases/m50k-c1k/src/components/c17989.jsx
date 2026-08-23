import React from 'react';
const LABEL_17989 = 'component_17989';
export function Component17989({ value = 17989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17989, 'data-value': derived.doubled }, children);
}
export default Component17989;
