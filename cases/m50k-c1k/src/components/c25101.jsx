import React from 'react';
const LABEL_25101 = 'component_25101';
export function Component25101({ value = 25101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25101, 'data-value': derived.doubled }, children);
}
export default Component25101;
