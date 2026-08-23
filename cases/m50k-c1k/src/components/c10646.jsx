import React from 'react';
const LABEL_10646 = 'component_10646';
export function Component10646({ value = 10646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10646, 'data-value': derived.doubled }, children);
}
export default Component10646;
