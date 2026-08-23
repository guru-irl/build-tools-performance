import React from 'react';
const LABEL_24452 = 'component_24452';
export function Component24452({ value = 24452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24452, 'data-value': derived.doubled }, children);
}
export default Component24452;
