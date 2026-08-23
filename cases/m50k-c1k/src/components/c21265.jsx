import React from 'react';
const LABEL_21265 = 'component_21265';
export function Component21265({ value = 21265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21265, 'data-value': derived.doubled }, children);
}
export default Component21265;
