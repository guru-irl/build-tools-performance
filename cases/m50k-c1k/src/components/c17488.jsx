import React from 'react';
const LABEL_17488 = 'component_17488';
export function Component17488({ value = 17488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17488, 'data-value': derived.doubled }, children);
}
export default Component17488;
