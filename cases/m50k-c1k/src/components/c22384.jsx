import React from 'react';
const LABEL_22384 = 'component_22384';
export function Component22384({ value = 22384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22384, 'data-value': derived.doubled }, children);
}
export default Component22384;
