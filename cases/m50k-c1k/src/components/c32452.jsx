import React from 'react';
const LABEL_32452 = 'component_32452';
export function Component32452({ value = 32452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32452, 'data-value': derived.doubled }, children);
}
export default Component32452;
