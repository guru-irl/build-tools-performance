import React from 'react';
const LABEL_32151 = 'component_32151';
export function Component32151({ value = 32151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32151, 'data-value': derived.doubled }, children);
}
export default Component32151;
