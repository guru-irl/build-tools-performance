import React from 'react';
const LABEL_17757 = 'component_17757';
export function Component17757({ value = 17757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17757, 'data-value': derived.doubled }, children);
}
export default Component17757;
