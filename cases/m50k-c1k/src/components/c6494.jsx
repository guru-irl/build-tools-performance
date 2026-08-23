import React from 'react';
const LABEL_6494 = 'component_6494';
export function Component6494({ value = 6494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6494, 'data-value': derived.doubled }, children);
}
export default Component6494;
