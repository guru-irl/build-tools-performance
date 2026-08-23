import React from 'react';
const LABEL_10830 = 'component_10830';
export function Component10830({ value = 10830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10830, 'data-value': derived.doubled }, children);
}
export default Component10830;
