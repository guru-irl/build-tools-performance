import React from 'react';
const LABEL_16452 = 'component_16452';
export function Component16452({ value = 16452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16452, 'data-value': derived.doubled }, children);
}
export default Component16452;
