import React from 'react';
const LABEL_34523 = 'component_34523';
export function Component34523({ value = 34523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34523, 'data-value': derived.doubled }, children);
}
export default Component34523;
