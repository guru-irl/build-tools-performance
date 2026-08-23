import React from 'react';
const LABEL_12792 = 'component_12792';
export function Component12792({ value = 12792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12792, 'data-value': derived.doubled }, children);
}
export default Component12792;
