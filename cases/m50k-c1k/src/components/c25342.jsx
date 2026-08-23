import React from 'react';
const LABEL_25342 = 'component_25342';
export function Component25342({ value = 25342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25342, 'data-value': derived.doubled }, children);
}
export default Component25342;
