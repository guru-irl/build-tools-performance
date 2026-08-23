import React from 'react';
const LABEL_3124 = 'component_3124';
export function Component3124({ value = 3124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3124, 'data-value': derived.doubled }, children);
}
export default Component3124;
