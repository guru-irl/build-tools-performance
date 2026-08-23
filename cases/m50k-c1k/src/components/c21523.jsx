import React from 'react';
const LABEL_21523 = 'component_21523';
export function Component21523({ value = 21523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21523, 'data-value': derived.doubled }, children);
}
export default Component21523;
