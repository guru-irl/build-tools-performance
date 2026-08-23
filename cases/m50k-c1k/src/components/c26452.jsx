import React from 'react';
const LABEL_26452 = 'component_26452';
export function Component26452({ value = 26452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26452, 'data-value': derived.doubled }, children);
}
export default Component26452;
