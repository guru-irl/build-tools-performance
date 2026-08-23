import React from 'react';
const LABEL_20452 = 'component_20452';
export function Component20452({ value = 20452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20452, 'data-value': derived.doubled }, children);
}
export default Component20452;
