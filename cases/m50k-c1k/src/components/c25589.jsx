import React from 'react';
const LABEL_25589 = 'component_25589';
export function Component25589({ value = 25589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25589, 'data-value': derived.doubled }, children);
}
export default Component25589;
