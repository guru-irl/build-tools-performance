import React from 'react';
const LABEL_17411 = 'component_17411';
export function Component17411({ value = 17411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17411, 'data-value': derived.doubled }, children);
}
export default Component17411;
