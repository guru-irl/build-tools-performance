import React from 'react';
const LABEL_6977 = 'component_6977';
export function Component6977({ value = 6977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6977, 'data-value': derived.doubled }, children);
}
export default Component6977;
