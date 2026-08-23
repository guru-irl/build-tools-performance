import React from 'react';
const LABEL_28452 = 'component_28452';
export function Component28452({ value = 28452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28452, 'data-value': derived.doubled }, children);
}
export default Component28452;
