import React from 'react';
const LABEL_17068 = 'component_17068';
export function Component17068({ value = 17068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17068, 'data-value': derived.doubled }, children);
}
export default Component17068;
