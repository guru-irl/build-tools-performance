import React from 'react';
const LABEL_17428 = 'component_17428';
export function Component17428({ value = 17428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17428, 'data-value': derived.doubled }, children);
}
export default Component17428;
