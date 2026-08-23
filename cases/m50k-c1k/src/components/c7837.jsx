import React from 'react';
const LABEL_7837 = 'component_7837';
export function Component7837({ value = 7837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7837, 'data-value': derived.doubled }, children);
}
export default Component7837;
