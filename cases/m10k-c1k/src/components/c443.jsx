import React from 'react';
const LABEL_443 = 'component_443';
export function Component443({ value = 443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_443, 'data-value': derived.doubled }, children);
}
export default Component443;
