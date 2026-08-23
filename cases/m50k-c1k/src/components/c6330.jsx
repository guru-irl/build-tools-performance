import React from 'react';
const LABEL_6330 = 'component_6330';
export function Component6330({ value = 6330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6330, 'data-value': derived.doubled }, children);
}
export default Component6330;
