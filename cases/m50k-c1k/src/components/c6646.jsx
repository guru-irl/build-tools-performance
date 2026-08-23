import React from 'react';
const LABEL_6646 = 'component_6646';
export function Component6646({ value = 6646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6646, 'data-value': derived.doubled }, children);
}
export default Component6646;
