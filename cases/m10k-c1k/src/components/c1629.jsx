import React from 'react';
const LABEL_1629 = 'component_1629';
export function Component1629({ value = 1629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1629, 'data-value': derived.doubled }, children);
}
export default Component1629;
