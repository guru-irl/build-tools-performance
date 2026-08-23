import React from 'react';
const LABEL_17176 = 'component_17176';
export function Component17176({ value = 17176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17176, 'data-value': derived.doubled }, children);
}
export default Component17176;
