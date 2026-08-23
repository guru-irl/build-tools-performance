import React from 'react';
const LABEL_17285 = 'component_17285';
export function Component17285({ value = 17285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17285, 'data-value': derived.doubled }, children);
}
export default Component17285;
