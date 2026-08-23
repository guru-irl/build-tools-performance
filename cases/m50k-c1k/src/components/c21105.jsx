import React from 'react';
const LABEL_21105 = 'component_21105';
export function Component21105({ value = 21105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21105, 'data-value': derived.doubled }, children);
}
export default Component21105;
