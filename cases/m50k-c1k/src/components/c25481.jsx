import React from 'react';
const LABEL_25481 = 'component_25481';
export function Component25481({ value = 25481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25481, 'data-value': derived.doubled }, children);
}
export default Component25481;
