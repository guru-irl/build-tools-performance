import React from 'react';
const LABEL_30452 = 'component_30452';
export function Component30452({ value = 30452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30452, 'data-value': derived.doubled }, children);
}
export default Component30452;
