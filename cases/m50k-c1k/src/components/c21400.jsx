import React from 'react';
const LABEL_21400 = 'component_21400';
export function Component21400({ value = 21400, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21400, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21400, 'data-value': derived.doubled }, children);
}
export default Component21400;
