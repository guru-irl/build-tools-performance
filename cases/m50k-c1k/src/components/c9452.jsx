import React from 'react';
const LABEL_9452 = 'component_9452';
export function Component9452({ value = 9452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9452, 'data-value': derived.doubled }, children);
}
export default Component9452;
