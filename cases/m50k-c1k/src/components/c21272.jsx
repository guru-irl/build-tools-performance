import React from 'react';
const LABEL_21272 = 'component_21272';
export function Component21272({ value = 21272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21272, 'data-value': derived.doubled }, children);
}
export default Component21272;
