import React from 'react';
const LABEL_8606 = 'component_8606';
export function Component8606({ value = 8606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8606, 'data-value': derived.doubled }, children);
}
export default Component8606;
