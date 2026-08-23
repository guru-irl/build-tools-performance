import React from 'react';
const LABEL_28352 = 'component_28352';
export function Component28352({ value = 28352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28352, 'data-value': derived.doubled }, children);
}
export default Component28352;
