import React from 'react';
const LABEL_10452 = 'component_10452';
export function Component10452({ value = 10452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10452, 'data-value': derived.doubled }, children);
}
export default Component10452;
