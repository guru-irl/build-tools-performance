import React from 'react';
const LABEL_24473 = 'component_24473';
export function Component24473({ value = 24473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24473, 'data-value': derived.doubled }, children);
}
export default Component24473;
