import React from 'react';
const LABEL_1472 = 'component_1472';
export function Component1472({ value = 1472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1472, 'data-value': derived.doubled }, children);
}
export default Component1472;
