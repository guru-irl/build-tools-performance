import React from 'react';
const LABEL_30236 = 'component_30236';
export function Component30236({ value = 30236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30236, 'data-value': derived.doubled }, children);
}
export default Component30236;
