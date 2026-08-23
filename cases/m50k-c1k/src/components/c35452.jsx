import React from 'react';
const LABEL_35452 = 'component_35452';
export function Component35452({ value = 35452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35452, 'data-value': derived.doubled }, children);
}
export default Component35452;
