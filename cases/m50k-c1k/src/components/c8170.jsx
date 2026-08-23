import React from 'react';
const LABEL_8170 = 'component_8170';
export function Component8170({ value = 8170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8170, 'data-value': derived.doubled }, children);
}
export default Component8170;
