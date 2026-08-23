import React from 'react';
const LABEL_18452 = 'component_18452';
export function Component18452({ value = 18452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18452, 'data-value': derived.doubled }, children);
}
export default Component18452;
