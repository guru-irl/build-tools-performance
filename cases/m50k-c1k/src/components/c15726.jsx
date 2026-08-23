import React from 'react';
const LABEL_15726 = 'component_15726';
export function Component15726({ value = 15726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15726, 'data-value': derived.doubled }, children);
}
export default Component15726;
