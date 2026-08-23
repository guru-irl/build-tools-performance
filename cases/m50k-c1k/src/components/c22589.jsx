import React from 'react';
const LABEL_22589 = 'component_22589';
export function Component22589({ value = 22589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22589, 'data-value': derived.doubled }, children);
}
export default Component22589;
