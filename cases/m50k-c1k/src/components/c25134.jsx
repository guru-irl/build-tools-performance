import React from 'react';
const LABEL_25134 = 'component_25134';
export function Component25134({ value = 25134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25134, 'data-value': derived.doubled }, children);
}
export default Component25134;
