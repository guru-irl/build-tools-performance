import React from 'react';
const LABEL_40494 = 'component_40494';
export function Component40494({ value = 40494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40494, 'data-value': derived.doubled }, children);
}
export default Component40494;
