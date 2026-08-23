import React from 'react';
const LABEL_25037 = 'component_25037';
export function Component25037({ value = 25037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25037, 'data-value': derived.doubled }, children);
}
export default Component25037;
