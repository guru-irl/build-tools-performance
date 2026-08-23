import React from 'react';
const LABEL_2452 = 'component_2452';
export function Component2452({ value = 2452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2452, 'data-value': derived.doubled }, children);
}
export default Component2452;
