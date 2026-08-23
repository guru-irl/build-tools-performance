import React from 'react';
const LABEL_3560 = 'component_3560';
export function Component3560({ value = 3560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3560, 'data-value': derived.doubled }, children);
}
export default Component3560;
