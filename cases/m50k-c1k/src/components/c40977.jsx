import React from 'react';
const LABEL_40977 = 'component_40977';
export function Component40977({ value = 40977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40977, 'data-value': derived.doubled }, children);
}
export default Component40977;
