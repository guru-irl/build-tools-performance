import React from 'react';
const LABEL_23367 = 'component_23367';
export function Component23367({ value = 23367, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23367, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23367, 'data-value': derived.doubled }, children);
}
export default Component23367;
