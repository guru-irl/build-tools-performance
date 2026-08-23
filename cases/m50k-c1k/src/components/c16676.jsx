import React from 'react';
const LABEL_16676 = 'component_16676';
export function Component16676({ value = 16676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16676, 'data-value': derived.doubled }, children);
}
export default Component16676;
