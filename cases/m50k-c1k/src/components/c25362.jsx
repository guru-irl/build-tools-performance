import React from 'react';
const LABEL_25362 = 'component_25362';
export function Component25362({ value = 25362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25362, 'data-value': derived.doubled }, children);
}
export default Component25362;
