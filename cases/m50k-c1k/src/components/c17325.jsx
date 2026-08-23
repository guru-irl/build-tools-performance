import React from 'react';
const LABEL_17325 = 'component_17325';
export function Component17325({ value = 17325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17325, 'data-value': derived.doubled }, children);
}
export default Component17325;
