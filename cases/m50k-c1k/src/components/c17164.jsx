import React from 'react';
const LABEL_17164 = 'component_17164';
export function Component17164({ value = 17164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17164, 'data-value': derived.doubled }, children);
}
export default Component17164;
