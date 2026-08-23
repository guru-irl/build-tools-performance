import React from 'react';
const LABEL_25966 = 'component_25966';
export function Component25966({ value = 25966, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25966, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25966, 'data-value': derived.doubled }, children);
}
export default Component25966;
