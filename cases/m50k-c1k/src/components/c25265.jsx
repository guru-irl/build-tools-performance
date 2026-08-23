import React from 'react';
const LABEL_25265 = 'component_25265';
export function Component25265({ value = 25265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25265, 'data-value': derived.doubled }, children);
}
export default Component25265;
