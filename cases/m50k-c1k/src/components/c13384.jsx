import React from 'react';
const LABEL_13384 = 'component_13384';
export function Component13384({ value = 13384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13384, 'data-value': derived.doubled }, children);
}
export default Component13384;
