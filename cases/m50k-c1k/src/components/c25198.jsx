import React from 'react';
const LABEL_25198 = 'component_25198';
export function Component25198({ value = 25198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25198, 'data-value': derived.doubled }, children);
}
export default Component25198;
