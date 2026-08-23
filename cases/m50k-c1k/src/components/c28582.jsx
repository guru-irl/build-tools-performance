import React from 'react';
const LABEL_28582 = 'component_28582';
export function Component28582({ value = 28582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28582, 'data-value': derived.doubled }, children);
}
export default Component28582;
