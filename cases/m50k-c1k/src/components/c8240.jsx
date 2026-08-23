import React from 'react';
const LABEL_8240 = 'component_8240';
export function Component8240({ value = 8240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8240, 'data-value': derived.doubled }, children);
}
export default Component8240;
