import React from 'react';
const LABEL_17235 = 'component_17235';
export function Component17235({ value = 17235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17235, 'data-value': derived.doubled }, children);
}
export default Component17235;
