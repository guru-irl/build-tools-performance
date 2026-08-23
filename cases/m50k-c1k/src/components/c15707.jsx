import React from 'react';
const LABEL_15707 = 'component_15707';
export function Component15707({ value = 15707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15707, 'data-value': derived.doubled }, children);
}
export default Component15707;
