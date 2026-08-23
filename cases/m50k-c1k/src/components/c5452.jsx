import React from 'react';
const LABEL_5452 = 'component_5452';
export function Component5452({ value = 5452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5452, 'data-value': derived.doubled }, children);
}
export default Component5452;
