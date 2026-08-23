import React from 'react';
const LABEL_34452 = 'component_34452';
export function Component34452({ value = 34452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34452, 'data-value': derived.doubled }, children);
}
export default Component34452;
