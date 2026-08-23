import React from 'react';
const LABEL_25257 = 'component_25257';
export function Component25257({ value = 25257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25257, 'data-value': derived.doubled }, children);
}
export default Component25257;
