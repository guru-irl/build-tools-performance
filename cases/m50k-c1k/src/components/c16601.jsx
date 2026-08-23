import React from 'react';
const LABEL_16601 = 'component_16601';
export function Component16601({ value = 16601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16601, 'data-value': derived.doubled }, children);
}
export default Component16601;
