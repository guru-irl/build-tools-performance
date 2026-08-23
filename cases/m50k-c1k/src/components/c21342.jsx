import React from 'react';
const LABEL_21342 = 'component_21342';
export function Component21342({ value = 21342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21342, 'data-value': derived.doubled }, children);
}
export default Component21342;
