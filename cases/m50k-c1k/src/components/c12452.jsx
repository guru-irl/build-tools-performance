import React from 'react';
const LABEL_12452 = 'component_12452';
export function Component12452({ value = 12452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12452, 'data-value': derived.doubled }, children);
}
export default Component12452;
