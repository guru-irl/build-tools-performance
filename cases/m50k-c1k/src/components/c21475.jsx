import React from 'react';
const LABEL_21475 = 'component_21475';
export function Component21475({ value = 21475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21475, 'data-value': derived.doubled }, children);
}
export default Component21475;
