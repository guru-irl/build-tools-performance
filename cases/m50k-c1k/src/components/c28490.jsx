import React from 'react';
const LABEL_28490 = 'component_28490';
export function Component28490({ value = 28490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28490, 'data-value': derived.doubled }, children);
}
export default Component28490;
