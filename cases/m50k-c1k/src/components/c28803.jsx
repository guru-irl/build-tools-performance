import React from 'react';
const LABEL_28803 = 'component_28803';
export function Component28803({ value = 28803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28803, 'data-value': derived.doubled }, children);
}
export default Component28803;
