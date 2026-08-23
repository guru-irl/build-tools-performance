import React from 'react';
const LABEL_25874 = 'component_25874';
export function Component25874({ value = 25874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25874, 'data-value': derived.doubled }, children);
}
export default Component25874;
