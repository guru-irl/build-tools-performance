import React from 'react';
const LABEL_3608 = 'component_3608';
export function Component3608({ value = 3608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3608, 'data-value': derived.doubled }, children);
}
export default Component3608;
