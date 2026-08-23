import React from 'react';
const LABEL_33920 = 'component_33920';
export function Component33920({ value = 33920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33920, 'data-value': derived.doubled }, children);
}
export default Component33920;
