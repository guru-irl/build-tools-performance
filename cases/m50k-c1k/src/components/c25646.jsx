import React from 'react';
const LABEL_25646 = 'component_25646';
export function Component25646({ value = 25646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25646, 'data-value': derived.doubled }, children);
}
export default Component25646;
