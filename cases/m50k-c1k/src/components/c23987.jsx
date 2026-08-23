import React from 'react';
const LABEL_23987 = 'component_23987';
export function Component23987({ value = 23987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23987, 'data-value': derived.doubled }, children);
}
export default Component23987;
