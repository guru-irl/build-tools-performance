import React from 'react';
const LABEL_14452 = 'component_14452';
export function Component14452({ value = 14452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14452, 'data-value': derived.doubled }, children);
}
export default Component14452;
