import React from 'react';
const LABEL_23431 = 'component_23431';
export function Component23431({ value = 23431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23431, 'data-value': derived.doubled }, children);
}
export default Component23431;
