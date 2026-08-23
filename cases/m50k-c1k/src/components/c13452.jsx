import React from 'react';
const LABEL_13452 = 'component_13452';
export function Component13452({ value = 13452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13452, 'data-value': derived.doubled }, children);
}
export default Component13452;
