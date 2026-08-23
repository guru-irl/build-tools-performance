import React from 'react';
const LABEL_44452 = 'component_44452';
export function Component44452({ value = 44452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44452, 'data-value': derived.doubled }, children);
}
export default Component44452;
