import React from 'react';
const LABEL_38452 = 'component_38452';
export function Component38452({ value = 38452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38452, 'data-value': derived.doubled }, children);
}
export default Component38452;
