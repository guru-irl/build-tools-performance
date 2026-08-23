import React from 'react';
const LABEL_35977 = 'component_35977';
export function Component35977({ value = 35977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35977, 'data-value': derived.doubled }, children);
}
export default Component35977;
