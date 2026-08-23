import React from 'react';
const LABEL_32977 = 'component_32977';
export function Component32977({ value = 32977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32977, 'data-value': derived.doubled }, children);
}
export default Component32977;
