import React from 'react';
const LABEL_21603 = 'component_21603';
export function Component21603({ value = 21603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21603, 'data-value': derived.doubled }, children);
}
export default Component21603;
