import React from 'react';
const LABEL_33853 = 'component_33853';
export function Component33853({ value = 33853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33853, 'data-value': derived.doubled }, children);
}
export default Component33853;
