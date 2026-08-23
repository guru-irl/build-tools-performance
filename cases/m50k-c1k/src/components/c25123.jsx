import React from 'react';
const LABEL_25123 = 'component_25123';
export function Component25123({ value = 25123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25123, 'data-value': derived.doubled }, children);
}
export default Component25123;
