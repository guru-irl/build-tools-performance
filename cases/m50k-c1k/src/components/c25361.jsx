import React from 'react';
const LABEL_25361 = 'component_25361';
export function Component25361({ value = 25361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25361, 'data-value': derived.doubled }, children);
}
export default Component25361;
