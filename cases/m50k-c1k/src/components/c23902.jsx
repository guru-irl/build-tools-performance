import React from 'react';
const LABEL_23902 = 'component_23902';
export function Component23902({ value = 23902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23902, 'data-value': derived.doubled }, children);
}
export default Component23902;
