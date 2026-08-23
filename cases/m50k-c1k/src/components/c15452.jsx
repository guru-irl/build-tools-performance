import React from 'react';
const LABEL_15452 = 'component_15452';
export function Component15452({ value = 15452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15452, 'data-value': derived.doubled }, children);
}
export default Component15452;
