import React from 'react';
const LABEL_23219 = 'component_23219';
export function Component23219({ value = 23219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23219, 'data-value': derived.doubled }, children);
}
export default Component23219;
