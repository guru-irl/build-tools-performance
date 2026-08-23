import React from 'react';
const LABEL_25148 = 'component_25148';
export function Component25148({ value = 25148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25148, 'data-value': derived.doubled }, children);
}
export default Component25148;
