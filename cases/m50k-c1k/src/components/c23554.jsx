import React from 'react';
const LABEL_23554 = 'component_23554';
export function Component23554({ value = 23554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23554, 'data-value': derived.doubled }, children);
}
export default Component23554;
