import React from 'react';
const LABEL_25100 = 'component_25100';
export function Component25100({ value = 25100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25100, 'data-value': derived.doubled }, children);
}
export default Component25100;
