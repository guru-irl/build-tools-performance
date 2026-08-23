import React from 'react';
const LABEL_21458 = 'component_21458';
export function Component21458({ value = 21458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21458, 'data-value': derived.doubled }, children);
}
export default Component21458;
