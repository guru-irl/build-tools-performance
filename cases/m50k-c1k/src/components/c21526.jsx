import React from 'react';
const LABEL_21526 = 'component_21526';
export function Component21526({ value = 21526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21526, 'data-value': derived.doubled }, children);
}
export default Component21526;
