import React from 'react';
const LABEL_25350 = 'component_25350';
export function Component25350({ value = 25350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25350, 'data-value': derived.doubled }, children);
}
export default Component25350;
