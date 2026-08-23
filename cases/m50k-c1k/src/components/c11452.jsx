import React from 'react';
const LABEL_11452 = 'component_11452';
export function Component11452({ value = 11452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11452, 'data-value': derived.doubled }, children);
}
export default Component11452;
