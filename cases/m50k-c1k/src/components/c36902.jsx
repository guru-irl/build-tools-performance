import React from 'react';
const LABEL_36902 = 'component_36902';
export function Component36902({ value = 36902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36902, 'data-value': derived.doubled }, children);
}
export default Component36902;
