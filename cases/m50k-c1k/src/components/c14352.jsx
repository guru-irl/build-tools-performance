import React from 'react';
const LABEL_14352 = 'component_14352';
export function Component14352({ value = 14352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14352, 'data-value': derived.doubled }, children);
}
export default Component14352;
