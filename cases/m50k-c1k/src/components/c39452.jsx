import React from 'react';
const LABEL_39452 = 'component_39452';
export function Component39452({ value = 39452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39452, 'data-value': derived.doubled }, children);
}
export default Component39452;
