import React from 'react';
const LABEL_40352 = 'component_40352';
export function Component40352({ value = 40352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40352, 'data-value': derived.doubled }, children);
}
export default Component40352;
