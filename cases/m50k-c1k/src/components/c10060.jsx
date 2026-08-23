import React from 'react';
const LABEL_10060 = 'component_10060';
export function Component10060({ value = 10060, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10060, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10060, 'data-value': derived.doubled }, children);
}
export default Component10060;
