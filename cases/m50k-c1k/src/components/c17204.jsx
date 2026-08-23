import React from 'react';
const LABEL_17204 = 'component_17204';
export function Component17204({ value = 17204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17204, 'data-value': derived.doubled }, children);
}
export default Component17204;
