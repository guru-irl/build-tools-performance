import React from 'react';
const LABEL_15486 = 'component_15486';
export function Component15486({ value = 15486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15486, 'data-value': derived.doubled }, children);
}
export default Component15486;
