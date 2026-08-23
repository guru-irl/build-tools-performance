import React from 'react';
const LABEL_21452 = 'component_21452';
export function Component21452({ value = 21452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21452, 'data-value': derived.doubled }, children);
}
export default Component21452;
