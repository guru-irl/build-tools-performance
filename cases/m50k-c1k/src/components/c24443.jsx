import React from 'react';
const LABEL_24443 = 'component_24443';
export function Component24443({ value = 24443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24443, 'data-value': derived.doubled }, children);
}
export default Component24443;
