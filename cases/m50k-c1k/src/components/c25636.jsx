import React from 'react';
const LABEL_25636 = 'component_25636';
export function Component25636({ value = 25636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25636, 'data-value': derived.doubled }, children);
}
export default Component25636;
