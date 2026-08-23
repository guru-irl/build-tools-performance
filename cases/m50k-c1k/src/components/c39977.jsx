import React from 'react';
const LABEL_39977 = 'component_39977';
export function Component39977({ value = 39977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39977, 'data-value': derived.doubled }, children);
}
export default Component39977;
