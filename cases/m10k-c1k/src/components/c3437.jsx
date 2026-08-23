import React from 'react';
const LABEL_3437 = 'component_3437';
export function Component3437({ value = 3437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3437, 'data-value': derived.doubled }, children);
}
export default Component3437;
