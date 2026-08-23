import React from 'react';
const LABEL_6803 = 'component_6803';
export function Component6803({ value = 6803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6803, 'data-value': derived.doubled }, children);
}
export default Component6803;
