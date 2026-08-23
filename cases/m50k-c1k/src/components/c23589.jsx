import React from 'react';
const LABEL_23589 = 'component_23589';
export function Component23589({ value = 23589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23589, 'data-value': derived.doubled }, children);
}
export default Component23589;
