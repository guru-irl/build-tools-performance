import React from 'react';
const LABEL_2589 = 'component_2589';
export function Component2589({ value = 2589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2589, 'data-value': derived.doubled }, children);
}
export default Component2589;
