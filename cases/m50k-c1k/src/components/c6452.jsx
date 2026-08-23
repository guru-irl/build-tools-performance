import React from 'react';
const LABEL_6452 = 'component_6452';
export function Component6452({ value = 6452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6452, 'data-value': derived.doubled }, children);
}
export default Component6452;
