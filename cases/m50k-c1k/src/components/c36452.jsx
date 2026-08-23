import React from 'react';
const LABEL_36452 = 'component_36452';
export function Component36452({ value = 36452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36452, 'data-value': derived.doubled }, children);
}
export default Component36452;
