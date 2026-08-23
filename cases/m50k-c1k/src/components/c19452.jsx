import React from 'react';
const LABEL_19452 = 'component_19452';
export function Component19452({ value = 19452, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19452, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19452, 'data-value': derived.doubled }, children);
}
export default Component19452;
