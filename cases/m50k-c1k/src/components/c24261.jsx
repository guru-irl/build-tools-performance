import React from 'react';
const LABEL_24261 = 'component_24261';
export function Component24261({ value = 24261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24261, 'data-value': derived.doubled }, children);
}
export default Component24261;
