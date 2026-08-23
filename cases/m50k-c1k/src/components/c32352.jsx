import React from 'react';
const LABEL_32352 = 'component_32352';
export function Component32352({ value = 32352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32352, 'data-value': derived.doubled }, children);
}
export default Component32352;
