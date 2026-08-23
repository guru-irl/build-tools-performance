import React from 'react';
const LABEL_17009 = 'component_17009';
export function Component17009({ value = 17009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17009, 'data-value': derived.doubled }, children);
}
export default Component17009;
