import React from 'react';
const LABEL_7452 = 'component_7452';
export function Component7452({ value = 7452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7452, 'data-value': derived.doubled }, children);
}
export default Component7452;
