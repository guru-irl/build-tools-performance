import React from 'react';
const LABEL_25558 = 'component_25558';
export function Component25558({ value = 25558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25558, 'data-value': derived.doubled }, children);
}
export default Component25558;
