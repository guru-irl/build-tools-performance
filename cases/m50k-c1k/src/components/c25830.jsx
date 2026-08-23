import React from 'react';
const LABEL_25830 = 'component_25830';
export function Component25830({ value = 25830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25830, 'data-value': derived.doubled }, children);
}
export default Component25830;
